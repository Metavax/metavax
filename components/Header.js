import React from "react";
import Image from "next/image";
import banner from "../public/imgs/banner.jpg";
import logo from "../public/imgs/logo.png";

export default function Header() {
	return (
		<>
			<div className='relative w-screen h-[60vh] md:h-[30rem]'>
				<Image
					src={banner}
					alt=''
					className='object-cover object-center'
					layout='fill'
				/>
				<div className='absolute z-10 flex flex-col items-center justify-center w-auto h-full text-center md:h-auto left-2 top-2 md:flex-none'>
					<Image src={logo} alt='MetaVax' />
					<p className='text-3xl text-white filter drop-shadow-text'>
						A virus is spreading...
					</p>
				</div>
			</div>
		</>
	);
}
