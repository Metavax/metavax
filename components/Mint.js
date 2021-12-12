import React, { useState } from "react";
import Image from "next/image";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "./Button";
import ButtonText from "./ButtonText";
import squid from "../public/imgs/squid-virus.png";
import tooltip from "../public/imgs/tooltip.svg";
import handle from "../public/imgs/virus-slider.png";

import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import contract from "../contracts/minter_contract.json";

export default function Mint(props) {
	const [tokenCount, setTokenCount] = useState(1);
	const [web3, setWeb3] = useState("");
	const [currentAddr, SetCurrentAddr] = useState("");
	const [contractInstance, SetContractInstance] = useState("");
	const price = (0.069 * tokenCount).toFixed(3);

	async function connectWallet() {
		const provider = await detectEthereumProvider();
		if (provider) startApp(provider);
		else console.log("Please install MetaMask!");
	}
	async function startApp(provider) {
		let web3 = new Web3(provider);
		setWeb3(web3);
		ethereum
			.request({ method: "eth_requestAccounts" })
			.then((accounts) => {
				let contractInstance = new web3.eth.Contract(
					contract.ABI,
					contract.Address
				);
				SetContractInstance(contractInstance);
				SetCurrentAddr(accounts[0]);
			})
			.catch((err) => {
				console.log("MetaMask Error:", err);
			});
	}
	function mintToken() {
		let mintPrice = Number(price) * 1000000000000000000;
		contractInstance.methods
			.publicMint(tokenCount)
			.send({
				from: currentAddr,
				value: mintPrice,
			})
			.on("transactionHash", (hash) => {
				console.log(hash);
			})
			.on("confirmation", (confirmationNumber, receipt) => {
				console.log(confirmationNumber, receipt);
			})
			.on("receipt", (receipt) => {
				console.log(receipt);
			})
			.on("error", (error, receipt) => {
				console.log(error, receipt);
			});
	}
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
										<Image src={handle} alt='Slider Handle' />
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
					{currentAddr ? (
						<Button txt='Mint' id='btn-mint' funcName={mintToken} />
					) : (
						<Button
							txt='Connect Wallet'
							id='btn-connect'
							funcName={connectWallet}
						/>
					)}
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
