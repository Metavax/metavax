import Wrapper from "../prebuilt/Wrapper";
import Image from "next/image";
import Tile from "../Tile";
import Mint from "./Mint";
import SocialList from "../SocialList";

import left from "../../public/img/left.png";
import right from "../../public/img/right.png";

import logo from "../../public/img/logo-small.png";

export default function MintFooter() {
	return (
		<>
			<Wrapper>
				<h3 className='lg:text-5xl mb-24 text-3xl text-center'>
					Any questions, feel free to join our discord!
				</h3>
				<SocialList
					discord='https://discord.gg/metavax'
					tiktok='https://www.tiktok.com/@metavaxnft'
					twitter='https://twitter.com/MetaVaxNFT'
					opensea='https://opensea.io/collection/metavaxnft'
				/>
				<div className='lg:grid-cols-3 auto-rows-auto grid grid-cols-1 gap-4'>
					<div className='flex-center'>
						<Image src={left} alt='Metavax NFTs' />
					</div>
					<div className='flex-center flex-col gap-6'>
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
				<div className='max-w-max mx-auto'>
					<Image src={logo} alt='MetaVax Logo' />
				</div>
			</Wrapper>
		</>
	);
}
