import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Modal from "./Modal";
import Social from "./Social";
import logo from "../../public/img/logo.png";

export default function Nav({ links, position }) {
	return (
		<>
			{/* Mobile Nav */}
			<div className='top-4 left-4 fixed'>
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							{links && (
								<>
									{links.map((link) => (
										<a
											className='nav-link text-white'
											href={`#${link.toLowerCase()}`}
											key={link}
										>
											{link}
										</a>
									))}
								</>
							)}
						</div>
					</Modal>
				</div>
			</div>

			{/* Desktop Nav */}
			<div
				className={`${position} z-50 bg-primary shadow-green border-b-2 border-solid border-black top-0 left-0 flex flex-row items-center justify-between w-full p-4`}
			>
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-secondary text-white'
					>
						<div className='flex flex-col gap-4'>
							{links && (
								<>
									{links.map((link) => (
										<a
											className='nav-link font-body font-bold text-black'
											href={`#${link.toLowerCase()}`}
											key={link}
										>
											{link}
										</a>
									))}
								</>
							)}
						</div>
					</Modal>
				</div>
				<div className='md:flex flex-row items-center justify-center hidden gap-4'>
					<div className='max-w-[9rem]'>
						<Image src={logo} alt='Metavax' />
					</div>
				</div>
				{links && (
					<>
						{links.map((link) => (
							<a
								className='nav-link md:block hover:text-secondary lg:text-xl hidden text-white'
								href={`#${link.toLowerCase()}`}
								key={link}
							>
								{link}
							</a>
						))}
					</>
				)}
				<Social />
			</div>
		</>
	);
}
