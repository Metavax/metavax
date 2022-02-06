import Wrapper from "../prebuilt/Wrapper";
import Image from "next/image";
import Tile from "../Tile";
import Mint from "./Mint";

import left from "../../public/img/left.png";
import right from "../../public/img/right.png";

export default function MintInfo() {
	return (
		<>
			<Wrapper>
				<div
					id='mint'
					className='lg:grid-cols-3 auto-rows-auto grid grid-cols-1 gap-4'
				>
					<div className='flex-center'>
						<Image src={left} alt='Metavax NFTs' />
					</div>
					<div className='flex-center flex-col gap-6'>
						<div className='flex-center flex-col'>
							<h2>Mint 2/7</h2>
							<h3>0/200</h3>
						</div>
						<Tile>
							<div className='flex flex-row items-center justify-between w-full'>
								<p className='mb-0'>Total Supply:</p>
								<p>3,190</p>
							</div>

							<div className='flex flex-row items-center justify-between w-full'>
								<p className='mb-0'>Current Launch Supply:</p>
								<p>200</p>
							</div>

							<div className='flex flex-row items-center justify-between w-full'>
								<p className='mb-0'>Pre-Sale Price:</p>
								<p>0.059 ETH</p>
							</div>

							<div className='flex flex-row items-center justify-between w-full'>
								<p className='mb-0'>Public Sale Price:</p>
								<p>0.0069 ETH</p>
							</div>
						</Tile>
						<Mint />
					</div>
					<div className='flex-center'>
						<Image src={right} alt='Metavax NFTs' />
					</div>
				</div>
			</Wrapper>
		</>
	);
}
