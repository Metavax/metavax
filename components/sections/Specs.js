import Wrapper from "../prebuilt/Wrapper";
import Image from "next/image";

import naruto from "../../public/img/naruto.png";
import king from "../../public/img/king.png";
import alien from "../../public/img/alien.png";
import skeleton from "../../public/img/skeleton.png";
import demon from "../../public/img/demon.png";
import predator from "../../public/img/predator.png";

const SpecTile = ({ img, children, phase, title }) => {
	return (
		<>
			<div className='flex-center lg:flex-row flex-col gap-8'>
				<div className='flex-shrink-0'>
					<Image src={img} alt={title} layout='' />
				</div>
				<div className='flex flex-col gap-2 text-left'>
					<h2 className='lg:text-2xl text-xl'>{title}</h2>
					{children}
					<p className='max-w-max bg-secondary p-2 text-white rounded-lg'>
						"Developed Mint Phase {phase}"
					</p>
				</div>
			</div>
		</>
	);
};

export default function Specs() {
	return (
		<>
			<Wrapper>
				<div id='specs' className='mb-12 text-center'>
					<h2>
						<span className='text-secondary'>Project</span> Specs & Plans
					</h2>
					<h3>Utility and Intergration</h3>
				</div>
				<div className='lg:grid-cols-2 auto-rows-auto grid gap-12'>
					<SpecTile title='Tokenomics + Staking' phase='5' img={naruto}>
						<p>
							Create a <b>$VAX</b> SPL-20 Fungible Token used within the MetaVax
							Ecosystem. NFTs can be staked on our website and holders will earn{" "}
							<b>$VAX</b> based off rarirty
							<br />
							E.g. <b>Epic</b> = 4x <b>$VAX</b>/Day (Staked)
						</p>
					</SpecTile>

					<SpecTile title='MetaClinic NFT' phase='6' img={king}>
						<p>
							New NFT into the MetaVax ecosystem. It will act as an interactive
							dashboard for holders to stake their MetaVax(s). MetaClinic
							multiplies your overall <b>$VAX</b> generation.
						</p>
					</SpecTile>

					<SpecTile title='Humanitarian Aid Missions' phase='5' img={alien}>
						<p>
							Daily, weekly and monthly humanitarian aid missions. Completing a
							mission will grant; <b>$VAX</b>, items for your MetaClinic, NFTs
							and crypto prizes. Further integration into the Metaverse and Web
							3.
						</p>
					</SpecTile>

					<SpecTile
						title='Passive Income (DEX Launch)'
						phase='7'
						img={skeleton}
					>
						<p>
							$VAX token will be trade-able on DEXs with liqudity. MetaVax team
							will use a percetange of profits to fund the liqudity pool.
							Essentially holders will be able to sell their generated{" "}
							<b>$VAX</b> for USDT/ETH.
						</p>
					</SpecTile>

					<SpecTile
						title='DAO & Sales and Purchase Agreement'
						phase='7'
						img={demon}
					>
						<p>
							MetaVax holders will have a voice and vote in every decision post
							mint. This will eliminate the hierarchy system. SPA will be
							implemented to keep a stable floor price of <b>0.25 ETH</b>. Any
							listed below will be blacklisted.
						</p>
					</SpecTile>

					<SpecTile
						title='Dose 2 / Booster Shot + Scientist NFT'
						phase='7'
						img={predator}
					>
						<p>
							Dose 2 will be used alongside Dose 1 (current collection) to breed
							a Scientist (3-D Avatar in <b>$SANDBOX</b>). Booster shots will be
							developed and have certain utility alongside both doses.{" "}
							<b>$VAX</b> will be used to purchase your booster.
						</p>
					</SpecTile>
				</div>
			</Wrapper>
		</>
	);
}
