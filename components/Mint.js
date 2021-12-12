import React, { useState } from "react";
import Image from "next/image";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "./Button";
import ButtonText from "./ButtonText";
import squid from "../public/imgs/squid-virus.png";
import tooltip from "../public/imgs/tooltip.svg";
import sliderImage from "../public/imgs/virus-slider.png";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import contractAbi from '../contractAbi.json';


const chain = 4; // TODO
const contractAddress = '0x207CD7d09f71628554957A93A1D2cc37B9B387Ba'; // TODO

const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/8hhd5SbSzqFnmoDyaLrMenGTYl87fQs9`); // TODO
const contract = new web3.eth.Contract(contractAbi, contractAddress);
//---

const switchChainRequestData = {
	"method": "wallet_switchEthereumChain",
	"params": [
		{
			"chainId": `0x${chain.toString(16)}`
		}
	]
};

const requestAccountsData = {
	method: "eth_requestAccounts",
};

const whitelistApiURL = 'https://vax-whitelist-api.herokuapp.com/api/whitelist?address=';

export default function Mint(props) {
	const [tokenCount, setTokenCount] = useState(1);
	const [address, setAddress] = useState(undefined); // Can use this in the UI if needed
	const price = (0.069 * tokenCount).toFixed(3);

	const connect = () => {
		if (!window.ethereum) {
			alert('Please install metamask! (make an error popup)');
			return new Promise(res => { res(false) })
		}

		ethereum.on('accountsChanged', (accounts) => {
			if (accounts.length > 0)
				setAddress(accounts[0])
			else
				setAddress(undefined)
		});

		web3.setWriteProvider(window.ethereum);

		return window.ethereum.request(requestAccountsData).then(accounts => {
			setAddress(accounts[0]);
			web3.eth.defaultAccount = accounts[0];
			return window.ethereum.request(switchChainRequestData).then(() => { return true }).catch(() => { return false })
		}).catch(() => { return false })
	}

	const mint = () => {
		try {
			connect().then(async connected => {
				if (!connected) return;

				const amount = tokenCount;
				const value = web3.utils.toBN(0.069e18).mul(web3.utils.toBN(tokenCount));
				const from = (await (web3.eth.getAccounts()))[0];

				const publicSaleStatus = await contract.methods.isPublicSaleActive().call().catch(e => { console.error(e); return false });
				const WhitelistSaleStatus = await contract.methods.isWhitelistSaleActive().call().catch(e => { console.error(e); return false });

				if (!(publicSaleStatus || WhitelistSaleStatus)) {
					//Sale isn't active
					return alert('Sale is not currently active!');
				} else if (publicSaleStatus) {
					// Public and/or whitelist is active
					return contract.methods.publicMint(amount).send({ value, from });
				}

				// Whitelist is active
				return fetch(whitelistApiURL + address).then(async response => {
					if (response.ok) {
						const { signature } = await response.json();
						return contract.methods.whitelistMint(amount, signature).send({ value, from }).catch(() => { });
					} else {
						const { error } = await response.json();
						return alert(`${response.status !== 403 ? `${response.status}: ` : ''}${error}`);
					}
				}).catch((e) => {
					alert(`Error: ${e.message}`);
				})

			})
		} catch (e) { console.error(e); }
	};


	return (
		<>
			<div id='mint' className='relative'>
				<ButtonText>
					Price <span className='price'>{price}</span> ETH
				</ButtonText>

				<div className='py-24'>
					<div className='max-w-xl mx-auto'>
						<Slider
							onChange={setTokenCount}
							min={1}
							max={10}
							defaultValue={tokenCount}
							handle={(handleProps) => (
								<Handle {...handleProps} ariaValueTextFormatter={undefined}>
									<div className='relative left-0 w-12 h-12'>
										<div className='absolute flex items-center justify-center bottom-12'>
											<span className='absolute z-10 mx-auto text-xl leading-none text-black left-4 top-1'>
												{tokenCount}
											</span>
											<Image src={tooltip} alt='Slider Tooltip' />
										</div>
										<Image src={sliderImage} alt='Slider Handle' />
									</div>
								</Handle>
							)}
							handleStyle={{ border: "none", backgroundColor: "transparent" }}
						/>
					</div>
				</div>

				<div className='relative flex items-center justify-center'>
					<div className='absolute'>
						<Image src={squid} alt='Squid' />
					</div>
					<Button OnClick={mint} txt='Mint' />
				</div>

				<div className='mt-4 text-center light-text'>
					<p className='mb-4'>*Maximum 5 MetaVax in Pre-sale</p>
					<p>*Maximum 10 MetaVax per transaction in public sale.</p>
					<p>Transactions unlimited.</p>
				</div>
			</div>
		</>
	);
}
