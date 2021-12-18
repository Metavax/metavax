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
					<div className='top-1/4 absolute'>
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
			<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-10'>
				<div className='relative flex flex-col items-center justify-center'>
					<div className='-mr-8'>
						<Image src={virus} alt='Virus' />
					</div>
					<div className='absolute flex flex-col items-center justify-center'>
						<Image src={frame} alt='Frame' />
						<div className='absolute'>
							<ul className='list-disc'>
								<li className='last:pb-0 last:border-none py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid'>
									ERC-721 Contract
								</li>
								<li className='last:pb-0 last:border-none py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid'>
									Deployed Reveal
								</li>
								<li className='last:pb-0 last:border-none py-2 mb-0 text-2xl text-black border-b-2 border-black border-solid'>
									MetaMask Wallet
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='sm:grid-cols-2 auto-rows-min justify-items-center grid content-center gap-10'>
					<Spec title='Giveaways'>
						<ul>
							<li>
								$50,000 USD will be given away to 3 MetaVaxs holders.
								<div className='inner-list pl-4 mb-2'>
									<li>1st prize - $30,000</li>
									<li>2nd prize - $15,000</li>
									<li>3rd prize - $5,000</li>
								</div>
							</li>

							<li>1x Mint = 1x Ticket Entry</li>
							<li>Minters will get 1x extra ticket during the pre-sale!</li>
						</ul>
					</Spec>
					<Spec title='PRICE'>
						<h4>Pre-sale: 0.059 ETH</h4>
						<ul className='mb-4'>
							<li>Max 5 Mints</li>
						</ul>
						<h4>Public-sale: 0.069 ETH</h4>
						<ul>
							<li>Max 10 mints per transactions, unlimited transactions</li>
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
