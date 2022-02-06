import Image from "next/image";
import button from "../public/img/button-bg.png";

export default function Button(props) {
	return (
		<>
			{props.link === undefined ? (
				<button
					onClick={props.onClick}
					className='banger hover:scale-105 relative flex items-center justify-center transition-all duration-300 ease-in-out transform bg-center bg-no-repeat bg-cover select-none'
				>
					<Image className='w-full h-full' src={button} alt={props.txt} />
					<p className='lg:text-2xl filter drop-shadow-light absolute m-0 text-xl leading-none text-black uppercase'>
						{props.txt}
					</p>
				</button>
			) : (
				<a
					href={props.link}
					className='banger hover:scale-105 relative flex items-center justify-center transition-all duration-300 ease-in-out transform bg-center bg-no-repeat bg-cover select-none'
				>
					<Image src={button} alt={props.txt} />
					<p className='lg:text-2xl filter drop-shadow-light absolute m-0 text-xl leading-none text-black uppercase'>
						{props.txt}
					</p>
				</a>
			)}
		</>
	);
}
