import React from "react";
import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import logo from "../public/imgs/logo-small.png";

export default function Footer() {
	return (
		<div className='mx-auto max-w-max'>
			<div className='flex flex-row items-center justify-center'>
				<a
					href='https://twitter.com/MetaVaxNFT'
					target='_blank'
					rel='noreferrer'
				>
					<FaTwitter />
				</a>
				<a
					className='ml-4'
					href='https://discord.gg/MetaVax'
					target='_blank'
					rel='noreferrer'
				>
					<FaDiscord />
				</a>
			</div>
			<div className='mt-8'>
				<Image src={logo} alt='Metavax' />
			</div>
		</div>
	);
}
