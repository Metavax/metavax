import React from "react";
import Image from "next/image";
import Button from "./Button";
import ButtonText from "./ButtonText";
import MintSlider from "./MintSlider";
import squid from "../public/imgs/squid-virus.png";

export default function Mint() {
	return (
		<>
			<div id='mint' className='relative'>
				<ButtonText txt='Price 0.069 ETH' />

				<div className='py-24'>
					<MintSlider />
				</div>

				<div className='relative flex items-center justify-center'>
					<div className='absolute'>
						<Image src={squid} alt='Squid' />
					</div>
					<Button txt='Mint' />
				</div>

				<div className='mt-4 text-center light-text'>
					<p className='mb-4'>*Maximum 3 MetaVax in Pre-sale</p>
					<p>*Maximum 10 MetaVax per transaction in public sale.</p>
					<p>Transactions unlimited.</p>
				</div>
			</div>
		</>
	);
}
