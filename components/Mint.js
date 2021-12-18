import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractAbi from '../contractAbi.json';
import MintButton from './MintButton';
import Button from './Button';
import ButtonText from './ButtonText';
import CountDown from './Countdown';

const chain = 1;
const contractAddress = '0x7bEEeFF66004eE42Df093D3ceBb3Da39951B4e6d';

const web3 = new Web3(`https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
const contract = new web3.eth.Contract(contractAbi, contractAddress);

const switchChainRequestData = {
	method: 'wallet_switchEthereumChain',
	params: [
		{
			chainId: `0x${chain.toString(16)}`,
		},
	],
};

const whitelistApiURL = 'https://vax-whitelist-api.herokuapp.com/api/whitelist?address=';

export default function Mint(props) {
	const [tokenCount, setTokenCount] = useState(1);
	const [address, setAddress] = useState(undefined);
	const [publicSaleActive, setPublicSaleActive] = useState(false);
	const [preSaleActive, setPreSaleActive] = useState(false);
	const presalePrice = (0.059 * tokenCount).toFixed(3);
	const publicPrice = (0.069 * tokenCount).toFixed(3);
	const maxWhitelistMints = 5;
	var intervalSet = false;

	useEffect(() => {
		setInterval(() => {
			updateStates().catch(() => {});
		}, 2500);
		updateStates().catch(() => {});
	}, []);

	const updateStates = async () => {
		const newPublicState = await contract.methods.publicSale().call();
		const newPresaleState = await contract.methods.whitelistSale().call();

		setPublicSaleActive(newPublicState);
		setPreSaleActive(newPresaleState);

		return { newPublicState, newPresaleState };
	};

	const connect = async () => {
		if (!window.ethereum) {
			alert('Please install metamask! (make an error popup)');
			return false;
		}

		web3.setProvider(window.ethereum);

		if (!intervalSet) {
			intervalSet = true;

			ethereum.on('accountsChanged', (accounts) => {
				if (accounts.length > 0) {
					if (address === accounts[0]) return;
					setAddress(accounts[0]);
				} else {
					setAddress(undefined);
				}
			});
		}

		try {
			setAddress((await web3.eth.requestAccounts())[0]);
			return window.ethereum
				.request(switchChainRequestData)
				.then(() => {
					return true;
				})
				.catch(() => {
					return false;
				});
		} catch {
			return false;
		}
	};

	const presaleMint = async () => {
		try {
			const connected = await connect();
			if (!connected) return;

			const amount = tokenCount;
			const value = web3.utils.toBN(0.059e18).mul(web3.utils.toBN(tokenCount));
			const from = (await web3.eth.getAccounts())[0];

			const res = await getSignature(from);
			if (!res.success) {
				if (res.status === 403) {
					return alert('You are not whitelisted!');
				} else {
					return alert(res.status);
				}
			}

			const signature = res.signature;
			const currentMints = parseInt(await contract.methods.whitelistMints(from).call());

			if (currentMints + amount > maxWhitelistMints) {
				return alert(
					`You have already used up ${currentMints} out of your ${maxWhitelistMints} mints! ${
						currentMints < maxWhitelistMints ? `\nYou can mint up to ${maxWhitelistMints - currentMints} more.` : ''
					}`
				);
			}

			return contract.methods
				.whitelistMint(amount, signature)
				.send({ value, from })
				.catch(() => {});
		} catch (e) {
			console.error(e);
		}
	};

	const publicMint = async () => {
		try {
			const connected = await connect();
			if (!connected) return;

			const amount = tokenCount;
			const value = web3.utils.toBN(0.069e18).mul(web3.utils.toBN(tokenCount));
			const from = (await web3.eth.getAccounts())[0];

			try {
				return contract.methods.publicMint(amount).send({ value, from });
			} catch {
				alert('Could not estimate gas, the transaction may fail!');
			}

			return contract.methods.publicMint(amount).estimateGas({ value, from });
		} catch (e) {
			console.error(e);
		}
	};

	const getSignature = async (address) => {
		try {
			const response = await fetch(whitelistApiURL + address);
			if (response.ok) {
				const data = await response.json();
				return { success: true, signature: data.signature };
			} else {
				return { success: false, status: response.status };
			}
		} catch {
			return { success: false, status: 'Unknown' };
		}
	};

	return (
		<CountDown date='December 18, 2021 23:00:00 GMT+09:30'>
			{address === undefined ? (
				<div className='py-24'>
					<div className='flex items-center justify-center max-w-xl mx-auto'>
						<Button onClick={connect} txt='Connect to Mint' />
					</div>
				</div>
			) : publicSaleActive ? (
				<MintButton max={10} price={publicPrice} tokenSet={setTokenCount} tokenCount={tokenCount} click={publicMint} />
			) : preSaleActive ? (
				<MintButton max={5} price={presalePrice} tokenSet={setTokenCount} tokenCount={tokenCount} click={presaleMint} />
			) : (
				<ButtonText txt='No active sales!'></ButtonText>
			)}
		</CountDown>
	);
}
