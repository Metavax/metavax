import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Nav() {
	return (
		<>
			<div className='sticky top-0 z-[99] bg-primary flex flex-row items-center justify-between w-full p-5'>
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
				</div>
			</div>
		</>
	);
}
