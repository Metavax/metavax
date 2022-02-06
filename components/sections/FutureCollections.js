import Wrapper from "../prebuilt/Wrapper";
import Image from "next/image";
import Tile from "../Tile";
import Button from "../Button";

import banner from "../../public/img/banner-small.png";
import question from "../../public/img/question.png";
import clinic from "../../public/img/clinic.png";
import clinicRough from "../../public/img/clinic-rough.png";

export default function FutureCollections() {
	return (
		<>
			<Wrapper>
				<h2 id='post-mint'>
					<span className='text-secondary'>Future</span> Collections
				</h2>
				<h3>Post Mint Development - Sneak Peeks</h3>
				<div className='lg:grid-cols-4 auto-rows-auto grid grid-cols-1 gap-6'>
					<div className='lg:col-span-3'>
						<Image src={banner} alt='Future Collections' layout='responsive' />
					</div>
					<div className='flex-center flex-col'>
						<div className='p-6 border-2 border-white border-opacity-50 border-solid'>
							<ul className='text-white list-disc list-inside opacity-75'>
								<li>Scientist NFT Collection</li>
								<li>Custom discord PFPs</li>
								<li>3-D Avatar into the Metaverse</li>
								<li>Breeding system (Dos 1 + Dose 2)</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='flex-center flex-col mt-12'>
					<h3 className='lg:text-4xl text-3xl'>
						<span className='text-secondary'>MetaClinic</span> NFT
					</h3>
					<p>(Land in $SANDBOX)</p>
				</div>
				<div className='lg:grid-cols-3 auto-rows-auto grid grid-cols-1 gap-12 mt-12'>
					<div className='flex-center relative'>
						<div className='bg-secondary aspect-square flex-center rounded-3xl absolute h-full transform translate-x-4 translate-y-4'></div>
						<Image src={clinicRough} alt='Clinic Rough' />
					</div>
					<div className='flex-center relative'>
						<div className='bg-secondary aspect-square flex-center rounded-3xl absolute h-full transform translate-x-4 translate-y-4'></div>
						<Image src={clinic} alt='Metavax Clinic' />
					</div>
					<div className='flex-center'>
						<div className='bg-secondary aspect-square flex-center rounded-3xl h-full'>
							<Image src={question} alt='Unknown' />
						</div>
					</div>
				</div>

				<div className='bg-secondary shadow-harsh max-w-max flex-center rounded-2xl relative flex-col gap-4 p-6 mx-auto mt-24 bg-opacity-25'>
					<div>
						<p>
							MetaClinic will be an interactive dashboard for the MetaVax
							ecosystem within our website. This is where holders will
							stake/view their MetaVax NFTs.
						</p>
						<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-6'>
							<div>
								<p className='font-bold'>
									Some core features of the MetaClinc include:
								</p>
								<ul className='text-white list-disc list-inside'>
									<li>Breakdown of your $VAX generation</li>
									<li>Research level of your Booster Shot</li>
									<li>$VAX multipler (based of rarity)</li>
									<li>Visiting other clinics</li>
									<li>Marketplace/Staking locker</li>
								</ul>
							</div>
							<div className='flex-center flex-col'>
								<Button
									txt='whitepaper'
									link='https://metavax-nft.gitbook.io/metavax/metavax-overview/roadmap'
								/>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
