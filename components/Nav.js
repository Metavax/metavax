import React, { useState } from "react";
import Image from "next/image";
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import frame from "../public/imgs/nav-frame.png";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	function closeNav() {
		return setIsOpen(false);
	}
	return (
		<>
			<div className='sticky top-0 z-[99] bg-primary md:flex hidden flex-row items-center justify-between w-full p-5 shadow-green border-b-2 border-solid border-black'>
				<div className='flex flex-row'>
					<a href='#about'>About</a>
					<span className='mx-5'>|</span>
					<a href='#mint'>Mint</a>
					<span className='mx-5'>|</span>
					<a href='#roadmap'>Roadmap</a>
					<span className='mx-5'>|</span>
					<a href='#rarity'>Rarity/Specs</a>
					<span className='mx-5'>|</span>
					<a href='#team'>Team</a>
					<span className='mx-5'>|</span>
					<a href='#faq'>FAQ</a>
				</div>
				<div className='flex flex-row'>
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
			</div>

			<div className='fixed z-[99] flex flex-row justify-between w-screen p-2 md:hidden'>
				<div className='nav-icon max-w-max' onClick={() => setIsOpen(!isOpen)}>
					<FiMenu />
				</div>
				<div className='flex flex-row pt-3'>
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
			</div>

			{isOpen && (
				<>
					<div
						onClick={closeNav}
						className='fixed top-0 left-0 h-screen w-screen backdrop-filter backdrop-blur-sm z-[98]'
					></div>
					<div className='nav-mobile filter drop-shadow-lg'>
						<div></div>
						<div className='relative flex items-center justify-center w-screen'>
							<Image src={frame} alt='Nav' />
							<div className='absolute flex flex-col'>
								<a href='#about' onClick={closeNav}>
									About
								</a>
								<a href='#mint' onClick={closeNav}>
									Mint
								</a>
								<a href='#roadmap' onClick={closeNav}>
									Roadmap
								</a>
								<a href='#rarity' onClick={closeNav}>
									Rarity/Specs
								</a>
								<a href='#team' onClick={closeNav}>
									Team
								</a>
								<a href='#faq' onClick={closeNav}>
									FAQ
								</a>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
