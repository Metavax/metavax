import Image from "next/image";
import button from "../public/img/button-bg.png";

export default function ButtonText(props) {
	return (
		<>
			<div className='relative flex items-center justify-center bg-center bg-no-repeat bg-cover'>
				<Image className='select-none' src={button} alt={props.txt} />
				<p className='lg:text-2xl filter drop-shadow-light absolute m-0 text-xl leading-none text-black uppercase'>
					{props.txt}
					{props.children}
				</p>
			</div>
		</>
	);
}
