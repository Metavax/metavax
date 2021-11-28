import React from "react";
import Image from "next/image";
import specs from "../public/imgs/rarity-img.png";
import frame from "../public/imgs/frame.png";

const RarityRow = (props) => {
	return (
		<>
			<div className='flex flex-row justify-between py-3 border-b-2 border-black border-solid last:border-none last:pb-0'>
				<p className='mb-0 text-xl text-black'>{props.left}</p>
				<p className='mb-0 text-xl text-black'>{props.right}</p>
			</div>
		</>
	);
};

export default function Rarity() {
	return (
		<>
			<div id='rarity' className='pt-36'>
				<h2 className='mb-8 text-center filter drop-shadow-text'>
					Rarity & <span className='text-secondary'>Specs</span>
				</h2>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2 auto-rows-auto'>
					<div className='flex flex-col items-center justify-center'>
						<div className='relative'>
							<Image src={frame} alt='Rarity Info' />
							<div className='absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full p-12 items-between'>
								<RarityRow left='6,019' right='Total' />
								<RarityRow left='130+' right='Traits' />
								<RarityRow left='25' right='Backgrounds' />
								<RarityRow left='25' right='Needles' />
								<RarityRow left='25' right='Plunger' />
								<RarityRow left='25' right='Fluids' />
								<RarityRow left='20' right='Needle Tip' />
								<RarityRow left='10' right='Legendary 1 of 1 Vaccines' />
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
