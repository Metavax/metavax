import React from "react";
import Image from "next/image";
import frame from "../public/imgs/date-frame.png";

export default function Date() {
	return (
		<>
			<Image src={frame} alt='Minting Date' />
			<div className='absolute'>
				<p className='mb-1 text-xl font-medium tracking-widest stroke text-teal filter drop-shadow-light'>
					Pre-sale - 18th DEC 2021
				</p>
				<p className='mb-0 text-xl font-medium tracking-widest stroke text-teal filter drop-shadow-light'>
					Public-sale - 19th DEC 2021
				</p>
			</div>
		</>
	);
}
