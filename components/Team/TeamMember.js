import React from "react";
import Image from "next/image";

export default function TeamMember(props) {
	return (
		<div
			className={`flex flex-col items-center md:text-start text-center justify-center mb-12 last:mb-0 ${
				props.reverse === false ? "md:flex-row" : "md:flex-row-reverse"
			}`}
		>
			<Image src={props.img} alt={props.name} />
			<div
				className={`mt-8 md:mt-0 ${
					props.reverse === false ? "md:ml-8" : "md:mr-8"
				}`}
			>
				<h3 className='mb-1 filter drop-shadow-text text-secondary'>
					{props.name}
				</h3>
				<p className='text-2xl text-white'>{props.position}</p>
				{props.children}
			</div>
		</div>
	);
}
