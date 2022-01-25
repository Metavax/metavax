import virus from "../public/imgs/blue-virus.png";
import Image from "next/image";

export default function index() {
	return (
		<>
			<div className='relative flex flex-col items-center justify-center w-screen min-h-screen'>
				<div className='absolute'>
					<Image src={virus} alt='Metavax NFT' />
				</div>
				<h2 className='drop-shadow-text relative z-10 mb-0'>
					Under Construction
				</h2>
			</div>
		</>
	);
}
