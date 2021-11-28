import React from "react";
import TeamMember from "./TeamMember";
import carts from "../../public/imgs/carts.png";
import moey from "../../public/imgs/moey.png";
import andrew from "../../public/imgs/andrew.png";
import kuyahil from "../../public/imgs/kuyahil.png";
import { FaInstagram } from "react-icons/fa";

export default function Team() {
	return (
		<>
			<div id='team' className='pt-28'>
				<h2 className='mb-8 text-center filter drop-shadow-text'>
					Meet the <span className='text-secondary'>Team</span>
				</h2>
				<TeamMember
					name='Carts'
					position='Founder  / Project Lead'
					img={carts}
					reverse={false}
				/>

				<TeamMember
					name='Moey'
					position='Founder  / General Manager'
					img={moey}
					reverse={true}
				/>

				<TeamMember
					name='Andrew'
					position='Lead Developer'
					img={andrew}
					reverse={false}
				/>

				<TeamMember
					name='Kuyahil'
					position='Lead Artist'
					img={kuyahil}
					reverse={true}
				>
					<a
						href='https://www.instagram.com/kuyahil'
						target='_blank'
						rel='noreferrer'
					>
						<FaInstagram />
					</a>
				</TeamMember>
			</div>
		</>
	);
}
