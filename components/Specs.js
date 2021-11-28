import React from "react";
import Image from "next/image";
import virus from "../public/imgs/virus-big.png";
import frame from "../public/imgs/frame-2.png";
import thinFrame from "../public/imgs/thin-frame.png";

const Spec = (props) => {
	return (
		<>
			<div className='relative flex flex-col items-center justify-start'>
				<div className='relative flex items-center justify-center mb-3'>
					<Image src={thinFrame} alt='Thin Frame' />
					<div className='absolute top-1/4'>
						<h4 className='mb-0 text-xl text-black'>{props.title}</h4>
					</div>
				</div>
				<div>{props.children}</div>
			</div>
		</>
	);
};

export default function Specs() {
	return (
		<>
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-2 auto-rows-auto'>
				<div className='relative flex flex-col items-center justify-center'>
					<div className='-mr-8'>
						<Image src={virus} alt='Virus' />
					</div>
					<div className='absolute flex flex-col items-center justify-center'>
						<Image src={frame} alt='Frame' />
						<div className='absolute'>
							<ul className='list-disc'>
								<li className='py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid last:pb-0 last:border-none'>
									ERC-721 Contract
								</li>
								<li className='py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid last:pb-0 last:border-none'>
									Deployed Reveal
								</li>
								<li className='py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid last:pb-0 last:border-none'>
									MetaMask Wallet
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='grid content-center gap-10 sm:grid-cols-2 auto-rows-min justify-items-center'>
					<Spec title='Giveaways'>
						<ul>
							<li>$50,000 USD will be given away to ONE MetaVax holder.</li>
							<li>1x Mint = 1x Ticket Entry</li>
							<li>Minters will get 1x extra ticket during the pre-sale!</li>
						</ul>
					</Spec>
					<Spec title='PRICE 0.069 ETH'>
						<ul>
							<li>Max 3 NFTs per transaction on pre-sale</li>
						</ul>
					</Spec>
					<Spec title='VIP Exclusive Membership'>
						<ul>
							<li>
								MetaVax holders will have exclusive access to the development of
								Dose 2. Research, level-up and upgrade your MetaVax to earn ETH
								prizes and rewards (staking feature),
							</li>
						</ul>
					</Spec>
					<Spec title='3% Royalty'>
						<ul>
							<li>
								Purchase low MetaVax NFTs to ensure floor is stable and allow
								the project to grow.
							</li>
							<li>
								MetaVax’s swept will be burnt to lower supply and increase
								value.
							</li>
						</ul>
					</Spec>
				</div>
			</div>
		</>
	);
}
