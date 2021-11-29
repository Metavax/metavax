import React from "react";
import Image from "next/image";
import button from "../public/imgs/button-bg.png";

export default function Button(props) {
	return (
		<>
			<div className='relative flex items-center justify-center bg-center bg-no-repeat bg-cover'>
				<Image className='select-none' src={button} alt={props.txt} />
				<p className='absolute m-0 text-xl leading-none text-black uppercase lg:text-2xl filter drop-shadow-light'>
					{props.txt}
					{props.children}
				</p>
			</div>
		</>
	);
}
