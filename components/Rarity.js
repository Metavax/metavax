import React from "react";
import Image from "next/image";
import specs from "../public/imgs/rarity-img.png";
import frame from "../public/imgs/frame.png";

const RarityRow = (props) => {
	return (
		<>
			<div className='border-secondary sm:border-black sm:flex-row last:border-none last:pb-0 flex flex-col justify-between py-3 text-center border-b-2 border-solid'>
				<p className='sm:text-black mb-0 text-xl'>{props.left}</p>
				<p className='sm:text-black mb-0 text-xl'>{props.right}</p>
			</div>
		</>
	);
};

export default function Rarity() {
	return (
		<>
			<div id='rarity' className='pt-36'>
				<h2 className='filter drop-shadow-text mb-8 text-center'>
					Rarity & <span className='text-secondary'>Specs</span>
				</h2>
				<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-16'>
					<div className='flex flex-col items-center justify-center'>
						<div className='relative'>
							<div className='sm:block hidden'>
								<Image src={frame} alt='Rarity Info' />
							</div>
							<div className='sm:absolute items-between top-0 left-0 z-10 flex flex-col justify-center w-full h-full p-12'>
								<RarityRow left='6,019' right='Total' />
								<RarityRow left='130+' right='Traits' />
								<RarityRow left='25' right='Backgrounds' />
								<RarityRow left='25' right='Needles' />
								<RarityRow left='25' right='Plunger' />
								<RarityRow left='25' right='Fluids' />
								<RarityRow left='20' right='Needle Tip' />
								<RarityRow left='9' right='Legendary 1 of 1 Vaccines' />
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center'>
						<Image src={specs} alt='Rarity Specs' />
					</div>
				</div>
			</div>
		</>
	);
}
