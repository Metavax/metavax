import Image from "next/image";
import Tile from "./Tile";
import squid from "../public/img/virus.png";

const RoadmapTile = ({ estdate, date, list, done, next }) => {
	return (
		<>
			<div className=' flex-center lg:flex-row relative z-10 flex-col gap-8'>
				<div className='shrink-0 text-center w-[10rem]'>
					<p className='mb-0 font-bold'>{estdate}</p>
					<p className='opacity-50'>{date}</p>
				</div>
				<div
					className={`border-secondary shrink-0 w-6 h-6 ${
						done && "bg-white"
					} border-2 border-solid rounded-full`}
				></div>
				<div className='w-36 h-[1px] lg:block hidden bg-white bg-opacity-50'></div>
				<div className='bg-secondary max-w-[23rem] shadow-harsh flex-center rounded-2xl relative flex-col w-full gap-4 p-6'>
					{list && (
						<ul className='flex flex-col gap-2 list-disc list-inside'>
							{list.map((item, index) => (
								<li className='max-w-[22rem]' key={index}>
									{item}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default function RoadmapList() {
	return (
		<>
			<div className='flex-center relative flex-col gap-12 bg-center bg-no-repeat bg-cover'>
				<div className='absolute z-0'>
					<Image src={squid} alt='Virus' />
				</div>
				<RoadmapTile
					estdate='December 2021'
					date='18/12/2021'
					list={[
						"Release of first mint phase 1/7 (200 collection)",
						"Pre-sale/Public Sale Successful - SOLD OUT",
					]}
					done
				/>

				<RoadmapTile
					estdate='January 2022'
					date='Early'
					list={[
						"Mint phase 1 minting closed",
						"Whitelist spots re-opened for Mint phase 2",
						"Website design revamped/updated",
						"Whitepaper finalized and published",
					]}
					done
				/>

				<RoadmapTile
					estdate='Febuary 2022'
					date='TBA'
					list={[
						"Release of Mint phase 2/7 (200 collection",
						"Pre-sale/Public Sale - 12 Feb 2022",
						"Airdrops + $2,000 USD Raffle to one MetaVax Holder",
					]}
				/>

				<RoadmapTile
					estdate='March 2022'
					date='Early'
					list={["Release of Mint Phase 3/7 (300 Collection)"]}
				/>

				<RoadmapTile
					estdate='March 2022'
					date='Late'
					list={["Release of Mint Phase 4/7 (400 Collection)"]}
				/>

				<RoadmapTile
					estdate='April 2022'
					date='Early'
					list={["Release of Mint Phase 5/7 (500 Collection)"]}
				/>

				<RoadmapTile
					estdate='April 2022'
					date='Late'
					list={["Release of Mint Phase 6/7 (600 Collection)"]}
				/>

				<RoadmapTile
					estdate='May 2022'
					date='2022'
					list={["Release of Mint Phase 7/7 (700 Collection)"]}
				/>

				<h3 className='lg:text-[10rem] uppercase lg:block drop-shadow-none opacity-25 -right-[65%] absolute bottom-[25%] hidden transform -rotate-90'>
					Roadmap
				</h3>
			</div>
		</>
	);
}
