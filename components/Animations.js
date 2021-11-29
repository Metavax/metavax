import React from "react";
import Image from "next/image";
import bigSquid from "../public/imgs/big-squid.png";
import giantSquid from "../public/imgs/giant-squid.png";
import blueVirus from "../public/imgs/blue-virus.png";
import blueVirusGroup from "../public/imgs/blue-virus-group.png";
import greenVirus from "../public/imgs/green-virus.png";
import greenUrchin from "../public/imgs/green-urchin.png";
import greenUrchinTwo from "../public/imgs/two-urchin.png";
import greenUrchinSmall from "../public/imgs/green-urchin-small.png";
import whiteUrchin from "../public/imgs/white-urchin.png";
import whiteUrchinSmall from "../public/imgs/white-urchin-small.png";

export default function Animations() {
	return (
		<>
			<div className='absolute transform scale-50 animate-germ md:-left-20 md:scale-100 md:top-0 -top-32 -left-32'>
				<Image src={blueVirus} alt='Virus' />
			</div>

			<div className='absolute scale-75 md:-right-20 opacity-60 md:scale-100 md:top-0 -right-32 top-[4.5%] animate-germ-reverse'>
				<Image src={greenUrchinTwo} alt='Virus' />
			</div>

			<div className='absolute hidden sm:block md:left-16 -left-32 md:top-[16%] top-[18%] opacity-60 scale-75 md:scale-100 animate-germ'>
				<Image src={bigSquid} alt='Virus' />
			</div>

			<div className='absolute md:right-8 -right-8 top-[23%] opacity-60 animate-germ-reverse'>
				<Image src={whiteUrchin} alt='Virus' />
			</div>

			<div className='absolute -left-20 top-[32%] opacity-60 animate-germ'>
				<Image src={greenUrchin} alt='Virus' />
			</div>

			<div className='sm:block hidden absolute md:-right-4 md:top-[48%] transform rotate-[30deg] opacity-60 -right-8 top-[50%] animate-germ-reverse'>
				<Image src={greenUrchin} alt='Virus' />
			</div>

			<div className='absolute md:left-20 -right-8 top-[58%] opacity-60 animate-germ'>
				<Image src={whiteUrchinSmall} alt='Virus' />
			</div>

			<div className='absolute md:right-8 -right-8 opacity-60 md:top-[62%] top-[64%] animate-germ-reverse'>
				<Image src={blueVirusGroup} alt='Virus' />
			</div>

			<div className='absolute right-32 top-[72%] opacity-60 animate-germ'>
				<Image src={greenUrchinSmall} alt='Virus' />
			</div>

			<div className='absolute -left-32 top-[72%] animate-germ-reverse'>
				<Image src={giantSquid} alt='Virus' />
			</div>

			<div className='sm:block hidden absolute -right-32 top-[75%] opacity-60 animate-germ'>
				<Image src={blueVirus} alt='Virus' />
			</div>

			<div className='absolute right-32 top-[81%] opacity-60 transform scale-75 rotate-90 animate-germ-reverse'>
				<Image src={bigSquid} alt='Virus' />
			</div>

			<div className='absolute md:right-32 md:top-[86%] -left-8 top-[85%] animate-germ'>
				<Image src={greenVirus} alt='Virus' />
			</div>

			<div className='absolute md:right-1/4 md:top-[88%] transform md:-rotate-45 top-[91%] rotate-[-15deg] animate-germ-reverse'>
				<Image src={giantSquid} alt='Virus' />
			</div>
		</>
	);
}
