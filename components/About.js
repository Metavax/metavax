import React from "react";
import Image from "next/image";
import vax1 from "../public/imgs/vax1.png";
import vax2 from "../public/imgs/vax2.png";
import vax3 from "../public/imgs/vax3.png";
import vax4 from "../public/imgs/vax4.png";

export default function About() {
	return (
		<>
			<div id='about' className='py-24'>
				<div className='grid grid-cols-1 gap-5 lg:grid-cols-2 auto-rows-auto'>
					<div className='flex flex-col items-start justify-center'>
						<h2 className='filter drop-shadow-text'>About Us.</h2>
						<h3 className='filter drop-shadow-text'>
							Our <span className='text-secondary'>Vision.</span>
						</h3>
						<p>There is a raging virus spreading amongst the Metaverse!</p>
						<p>
							Our clinic has created 6,019 MetaVax’s which aim to combat the
							virus and help spread awareness of the ongoing pandemic
							(COVID-19).
						</p>
						<p>
							Our mission with the project is to create a long term immunity for
							holders by first releasing dose one (1) out of two (2). This is
							the first step in creating utility by rewarding holders, investing
							a 3% royalty fund to buy back the floors on top of using admin
							funds. Upon reaching our goals, future utility will include
							implementing humanitarian aid missions (staking feature) around
							the Metaverse that allow holders to level up their MetaVax and win
							rewards/prizes.
						</p>
						<p>
							We plan to build a community of MetaVax members by providing more
							value for our holders, as opposed to extratcting value.
						</p>
					</div>
					<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 auto-rows-auto'>
						<div className='flex flex-col items-center justify-center filter drop-shadow-lg'>
							<Image src={vax1} alt='Vax 1' layout='intrinsic' />
						</div>
						<div className='flex flex-col items-center justify-center filter drop-shadow-lg'>
							<Image src={vax2} alt='Vax 2' layout='intrinsic' />
						</div>
						<div className='flex flex-col items-center justify-center filter drop-shadow-lg'>
							<Image src={vax3} alt='Vax 3' layout='intrinsic' />
						</div>
						<div className='flex flex-col items-center justify-center filter drop-shadow-lg'>
							<Image src={vax4} alt='Vax 4' layout='intrinsic' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
