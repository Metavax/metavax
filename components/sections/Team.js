import Image from "next/image";
import Wrapper from "../prebuilt/Wrapper";
import Tile from "../Tile";

import carts from "../../public/img/carts.png";
import moey from "../../public/img/moey.png";
import mark from "../../public/img/mark.png";
import doggo from "../../public/img/doggo.png";

import virus from "../../public/img/team-virus.png";

import aus from "../../public/img/australlia.png";
import flag from "../../public/img/flag.png";
import greece from "../../public/img/greece.png";

const Member = ({ img, flag, children, name, position }) => {
	return (
		<>
			<div className='relative flex flex-col gap-2 max-w-[35rem] mx-auto'>
				<div className='absolute md:block hidden bottom-14 -left-[25%] transform -rotate-90'>
					<h3 className='drop-shadow-none text-6xl uppercase'>{name}</h3>
				</div>
				<div className='-mb-24 relative z-20 mx-auto max-w-[18rem]'>
					<Image src={img} alt={name} />
				</div>
				<div className='bg-secondary shadow-harsh flex-center rounded-2xl relative z-10 flex-col w-full h-full gap-4 p-6 pt-24'>
					<div className='md:top-8 md:right-8 md:absolute md:mb-0 relative mb-6'>
						<Image src={flag} alt='Flag' />
					</div>
					<h3 className='drop-shadow-none md:hidden block text-4xl uppercase'>
						{name}
					</h3>
					<div>
						<h2 className='drop-shadow-none mb-6 text-3xl'>{position}</h2>
						{children}
					</div>
				</div>
				<div className='absolute -left-[15%] bottom-0 z-0'>
					<Image src={virus} alt='Virus' />
				</div>
			</div>
		</>
	);
};

export default function Team() {
	return (
		<>
			<Wrapper>
				<h2 id='team' className='mb-12 text-center'>
					Meet the <span className='text-secondary'>MetaVax Team</span>
				</h2>
				<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-12'>
					<Member
						img={carts}
						name='Carts'
						position='Founder & Project Lead'
						flag={aus}
					>
						<p>
							Hey lads!
							<br />
							<br />
							My role within the MetaVax team is to guarantee the project is
							carried through by executing and ensuring success. I have gathered
							the best of the best and spent countless months planning out
							MetaVax. My ambition is to provide more value, as opposed to
							extracting it.
						</p>
					</Member>

					<Member
						img={moey}
						name='Moey'
						position='Founder & General Manager'
						flag={aus}
					>
						<p>
							Wassup!
							<br />
							<br />
							My job is to oversea the flow of the project and make sure
							everything is running smoothly. I love a great chat and manage all
							communication/giveaways/prizes and twitter. I work hard everyday
							to achieve our goals.
						</p>
					</Member>

					<Member img={mark} name='Mark' position='Lead Artist' flag={flag}>
						<p>
							Hey Everyone!
							<br />
							<br />
							<p>
								I have 5+ years of low bro art design, creating gnarly
								characters and illustrating art covers for various musical
								artist. My aim is to share that niche style of art for MetaVax.
								Art is my life and I love it with a passion!
							</p>
						</p>
					</Member>

					<Member
						img={doggo}
						name='Doggo'
						position='Lead Developer'
						flag={greece}
					>
						<p>
							Hi Guys!
							<br />
							<br />
							My task is to build a safe and secure smart contract prioritzing
							low gas cost for minters without compromising security or being
							open to any vulvnerabilities. I’ve spent the last few years
							developing smart contracts for big players in the NFT scene. I am
							very excited to be part of such an awesome community!
						</p>
					</Member>
				</div>
			</Wrapper>
		</>
	);
}
