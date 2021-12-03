import React from "react";
import Image from "next/image";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../public/imgs/logo-small.png";
import calendar from "../public/imgs/nft-calendar.png";

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
				<a
					className='ml-4'
					href='https://www.instagram.com/metavaxnft/'
					target='_blank'
					rel='noreferrer'
				>
					<FaInstagram />
				</a>
			</div>
			<div className='mt-8 text-center'>
				<Image src={logo} alt='Metavax' />
			</div>
			<div className='mx-auto mt-0 text-center' style={{ width: "25%" }}>
				<Image src={calendar} alt='NFT Calendar' />
			</div>
			<div className='pb-6 mt-1 text-center'>
				<p>
					Developed by{" "}
					<a href='https://illusivemedia.co' target='_blank' rel='noreferrer'>
						Illusive Media
					</a>
				</p>
			</div>
		</div>
	);
}
