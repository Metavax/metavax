import React from "react";
import Image from "next/image";
// import Countdown from "./Countdown";
import Date from "./Date";
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
				<div className='absolute z-10 flex flex-col items-center justify-center w-auto h-full text-center md:h-auto md:left-2 md:top-2 md:flex-none'>
					<Image src={logo} alt='MetaVax' />
					<p className='text-3xl text-white filter drop-shadow-text'>
						A virus is spreading...
					</p>
				</div>
				{/* <div className='absolute left-1/2 right-1/2 bottom-4'>
					<Countdown date='December 1, 2021 22:51:00 GMT-07:00' />
				</div> */}
				<div className='absolute z-20 flex flex-col items-center justify-center right-4 bottom-4'>
					<Date />
				</div>
			</div>
		</>
	);
}
