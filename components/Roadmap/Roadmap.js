import React from "react";
import Image from "next/image";
import syringe from "../../public/imgs/syringe.png";

const RoadmapSection = (props) => {
	return (
		<>
			<div className={`lg:absolute lg:mb-0 mb-12 last:mb-0 ${props.className}`}>
				<div className='relative flex items-center mx-auto w-min'>
					<RoadmapLine className={props.lineStyle} />
					<h3
						className={`leading-none text-teal filter drop-shadow-text ${
							props.current && "animate-pulse"
						} ${props.done && "line-through"}`}
					>
						{props.percent}
					</h3>
				</div>
				<div className={`flex flex-col ${props.done && "line-through"}`}>
					{props.children}
				</div>
			</div>
		</>
	);
};

const RoadmapSectionMini = (props) => {
	return (
		<>
			<div className={`lg:absolute lg:mb-0 mb-12 ${props.className}`}>
				<div className='relative flex items-center mx-auto mb-4 w-min'>
					<RoadmapLine className={props.lineStyle} />
					<h3
						className={`mb-0 text-3xl leading-none text-teal filter drop-shadow-text ${
							props.current && "animate-pulse"
						} ${props.done && "line-through"}`}
					>
						{props.percent}
					</h3>
				</div>
				<div className={`flex flex-col ${props.done && "line-through"}`}>
					<p className='p-2 border-2 border-solid border-text'>
						{props.txt} <span className='text-sm'>*Metavax Holder</span>
					</p>
				</div>
			</div>
		</>
	);
};

const RoadmapLine = (props) => {
	return (
		<>
			<div
				className={`absolute h-2 bg-white filter drop-shadow-text hidden lg:block ${props.className}`}
			>
				<div className='absolute w-4 h-4 transform rotate-45 border-4 border-white border-solid -top-1 -right-3 bg-secondary'></div>
				<div className='absolute w-4 h-4 transform rotate-45 border-4 border-white border-solid -top-1 -left-3 bg-secondary'></div>
			</div>
		</>
	);
};

export default function Roadmap() {
	return (
		<>
			<div id='roadmap' className='pt-24'>
				<h2 className='mb-12 text-center filter drop-shadow-text'>
					MetaVax <span className='text-secondary'>Roadmap</span>
				</h2>
				<div className='relative flex flex-col items-center justify-center mx-auto mb-24'>
					<div className='hidden lg:block'>
						<Image src={syringe} alt='Roadmap' />
					</div>
					<RoadmapSection
						percent='0%'
						className='right-0 xl:right-32 top-36'
						lineStyle='right-full top-4 2xl:w-[24rem] w-[16rem] mr-8'
						done={false}
						current={true}
					>
						<ul>
							<li>
								Dose 1 of the MetaVax has passed testing stages and is now ready
								for minting.
							</li>
							<li>Pre-sale available for whitelisted members.</li>
						</ul>
					</RoadmapSection>

					<RoadmapSection
						percent='25%'
						className='left-0 xl:left-32 top-1/4'
						lineStyle='left-full top-4 2xl:w-[20.5rem] w-[12.5rem] ml-8'
					>
						<ul>
							<li>Reserved MetaVax tokens will be airdropped to holders.</li>
							<li>Collection includes legendary 1 of 1 MetaVax NFTs.</li>
						</ul>
					</RoadmapSection>

					<RoadmapSection
						percent='50%'
						className='right-0 xl:right-32 top-[38%]'
						lineStyle='right-full top-4 2xl:w-[19rem] w-[11rem] mr-8'
					>
						<ul>
							<li>
								With the amazing help of our community, a $30,000 donation fund
								will be established to help a reputable charity supporting the
								ongoing pandemic happening in the real life world (COVID19).
							</li>
							<li>
								The charity of choosing will be decided by you and the
								community! Feel free to share suggestions in the discord.
							</li>
						</ul>
					</RoadmapSection>

					<RoadmapSectionMini
						percent='60%'
						className='-left-12 xl:left-40 top-[45%]'
						lineStyle='left-full 2xl:w-[18.25rem] w-[10.25rem] ml-8'
						txt='3 Gaming PC Giveaway'
					/>

					<RoadmapSection
						percent='75%'
						className='left-0 xl:left-32 top-[60%]'
						lineStyle='left-full top-4 2xl:w-[18rem] w-[12.5rem] ml-8'
					>
						<ul>
							<li>Implement a staking feature for MetaVax Holders.</li>
							<li>
								You will go on Humanitarian Aid Missions around the metaverse in
								search for four Vials, whilst leveling up your ‘research’ level
								(1-50).
							</li>
							<li>
								Using the four vials will allow dose 2 to be minted, therefore
								burning off dose 1. Dose 2 of the Vaccine will be more ‘rare’
								(includes animated fluid/backgrounds)
							</li>
							<li>
								The more MetaVax’s you hold and the longer you hold onto them,
								grants more immunity in the metaverse allowing you as a holder
								to go on more missions and earn more prizes (crypto/rewards).
							</li>
						</ul>
					</RoadmapSection>

					<RoadmapSectionMini
						percent='85%'
						className='right-0 xl:right-40 top-[67%]'
						lineStyle='right-full 2xl:w-[19rem] w-[11rem] mr-8'
						txt='Tesla Model 3 Giveaway'
					/>

					<RoadmapSection
						percent='100%'
						className='right-0 xl:right-32 top-[80%]'
						lineStyle='right-full top-4 2xl:w-[19.5rem] w-[11.5rem] mr-8'
					>
						<ul>
							<li>
								We will establish a liquidity pool that will be used to purchase
								back some of the available MetaVax’s on OpenSea.
							</li>
							<li>
								Doing this it will ensure the floor price remains stable and
								strong, by aiming to buy out the lowest priced (floor price)
								MetaVax tokens.
							</li>
						</ul>
					</RoadmapSection>
				</div>
			</div>
		</>
	);
}
