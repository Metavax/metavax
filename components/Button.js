import React from "react";
import Image from "next/image";
import button from "../public/imgs/button-bg.png";

export default function Button(props) {
	return (
		<>
			{props.link === undefined ? (
				<button
					onClick={props.onClick}
					className='relative flex items-center justify-center transition-all duration-300 ease-in-out transform bg-center bg-no-repeat bg-cover select-none banger hover:scale-105'
				>
					<Image className='w-full h-full' src={button} alt={props.txt} />
					<p className='absolute m-0 text-2xl leading-none text-black uppercase lg:text-3xl filter drop-shadow-light'>
						{props.txt}
					</p>
				</button>
			) : (
				<a
					href={props.link}
					className='relative flex items-center justify-center transition-all duration-300 ease-in-out transform bg-center bg-no-repeat bg-cover select-none banger hover:scale-105'
				>
					<Image src={button} alt={props.txt} />
					<p className='absolute m-0 text-2xl leading-none text-black uppercase lg:text-3xl filter drop-shadow-light'>
						{props.txt}
					</p>
				</a>
			)}
		</>
	);
}
