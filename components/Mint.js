import React, { useState } from 'react'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import contractAbi from '../contractAbi.json'
import MintButton from './MintButton'
import Button from './Button'
import TimeHidden from './TimeHidden'
import CountDown from './Countdown'

const chain = 4 // TODO
const contractAddress = '0xB517Aaa558C08ce662B4cBc3A40CeffC04aBAf18' // TODO

const web3 = createAlchemyWeb3(
	`https://eth-rinkeby.alchemyapi.io/v2/8hhd5SbSzqFnmoDyaLrMenGTYl87fQs9`
) // TODO
const contract = new web3.eth.Contract(contractAbi, contractAddress)

const switchChainRequestData = {
	method: 'wallet_switchEthereumChain',
	params: [
		{
			chainId: `0x${chain.toString(16)}`,
		},
	],
}

const requestAccountsData = {
	method: 'eth_requestAccounts',
}

const whitelistApiURL =
	'https://vax-whitelist-api.herokuapp.com/api/whitelist?address='

export default function Mint(props) {
	const [tokenCount, setTokenCount] = useState(1)
	const [address, setAddress] = useState(undefined) // Can use this in the UI if needed
	const [signature, setSignature] = useState(undefined)
	const price = (0.069 * tokenCount).toFixed(3)
	const maxWhitelistMints = 5

	const connect = () => {
		if (!window.ethereum) {
			alert('Please install metamask! (make an error popup)')
			return new Promise((res) => {
				res(false)
			})
		}

		ethereum.on('accountsChanged', (accounts) => {
			if (accounts.length > 0) {
				setAddress(accounts[0])
				getNewSignature().then((sig) => {
					setSignature(sig)
				}).catch(() => {
					setSignature(undefined)
				})
			}
			else {
				setAddress(undefined)
				setSignature(undefined)
			}
		})

		web3.setWriteProvider(window.ethereum)

		return window.ethereum
			.request(requestAccountsData)
			.then(async (accounts) => {
				setAddress(accounts[0])
				const signature = await getNewSignature();
				setSignature(signature)
				return window.ethereum
					.request(switchChainRequestData)
					.then(() => {
						return true
					})
					.catch(() => {
						return false
					})
			})
			.catch(() => {
				setSignature(undefined)
				setAddress(undefined)
				return false
			})
	}

	const getNewSignature = () => {
		return web3.eth.getAccounts().then((accounts) => {
			return fetch(whitelistApiURL + accounts[0])
				.then(async (response) => {
					if (response.ok) {
						const { signature } = await response.json()
						return signature
					} else {
						return undefined
					}
				})
				.catch((e) => {
					alert(`Error: ${e.message}`)
				})
		})
	}

	const mint = () => {
		try {
			console.log('test');
			connect().then(async (connected) => {
				if (!connected) return

				const amount = tokenCount
				const value = web3.utils
					.toBN(0.069e18)
					.mul(web3.utils.toBN(tokenCount))
				const from = (await web3.eth.getAccounts())[0]

				const publicSaleStatus = await contract.methods
					.isPublicSaleActive()
					.call()
					.catch((e) => {
						console.error(e)
						return false
					})

				const WhitelistSaleStatus = await contract.methods
					.isWhitelistSaleActive()
					.call()
					.catch((e) => {
						console.error(e)
						return false
					})

				if (!(publicSaleStatus || WhitelistSaleStatus)) { //Sale isn't active
					return alert('Sale is not currently active!')

				} else if (publicSaleStatus) { // Public and/or whitelist is active
					return contract.methods
						.publicMint(amount)
						.send({ value, from })

				}
				if (signature === undefined) { return alert('You are not whitelisted!') }

				// Whitelist is active
				const currentMints = parseInt(await contract.methods.whitelistMints(from).call())
				console.log(currentMints, amount, maxMints)
				if (currentMints + amount > maxMints) {
					return alert(
						`You have already used up ${currentMints} out of your ${maxMints} mints! ${
						currentMints < maxMints ? `\nYou can mint up to ${maxMints - currentMints} more.`
							: ''
						}`
					)
				}
				return contract.methods.whitelistMint(amount, signature).send({ value, from }).catch(() => { });
			})
		} catch (e) {
			console.error(e)
		}
	}

	const presale = 'December 12, 2021 21:30:00 GMT+09:30'
	const publicsale = 'December 19, 2021 22:30:00 GMT+09:30'

	return (
		<>
			<CountDown date={presale}>
				{address === undefined ? (
					<div className='py-24'>
						<div className='flex items-center justify-center max-w-xl mx-auto'>
							<Button OnClick={connect} txt='Connect to Mint' />
						</div>
					</div>
				) : (
					<>
						<TimeHidden
							date={publicsale}
							preSale={
								<MintButton
									max={5}
									price={price}
									tokenSet={setTokenCount}
									tokenCount={tokenCount}
									click={mint}
								/>
							}
							publicSale={
								<MintButton
									max={10}
									price={price}
									tokenSet={setTokenCount}
									tokenCount={tokenCount}
									click={mint}
								/>
							}
						/>
					</>
				)}
			</CountDown>
		</>
	)
}
