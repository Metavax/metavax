import React from "react";
import Image from "next/image";
import button from "../public/imgs/button-bg.png";

export default function Button(props) {
	return (
		<>
			<div className='relative bg-no-repeat bg-cover bg-center flex justify-center items-center'>
				<Image className='select-none' src={button} alt={props.txt} />
				<p className='absolute text-black uppercase m-0 lg:text-2xl filter text-xl drop-shadow-light leading-none'>
					{props.txt}
				</p>
			</div>
		</>
	);
}
