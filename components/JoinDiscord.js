import React from "react";
import Image from "next//image";
import Button from "./Button";
import squid from "../public/imgs/squid-virus-2.png";

export default function JoinDiscord() {
	return (
		<div className='relative flex items-center justify-center pb-28'>
			<div className='absolute'>
				<Image src={squid} alt='Squid' />
			</div>
			<Button txt='Join the Discord' link='https://discord.gg/metavax' />
		</div>
	);
}
