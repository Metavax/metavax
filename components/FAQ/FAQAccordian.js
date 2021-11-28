import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import body from "../../public/imgs/faq-body.png";
import bodyLarge from "../../public/imgs/faq-body-large.png";
import frame from "../../public/imgs/faq-frame.png";
import frameMobile from "../../public/imgs/faq-frame-m.png";

export default function FAQAccordian({ children, title, large }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='relative mb-5 filter drop-shadow-md faq'>
				<div
					className='relative z-10 items-center justify-center hidden mx-auto cursor-pointer lg:flex max-w-max'
					onClick={() => setIsOpen(!isOpen)}
				>
					<Image src={frame} alt={title} />
					<h3
						className='absolute mb-0 text-3xl text-center text-black normal-case top-1/3 filter drop-shadow-light'
						onClick={() => setIsOpen(!isOpen)}
					>
						{title}
					</h3>
				</div>

				{isOpen && (
					<div className='z-0 hidden -mt-2 lg:block'>
						<div className='relative flex items-center justify-center mx-auto max-w-max'>
							<Image src={large === true ? bodyLarge : body} alt='FAQ Answer' />
							<div className='absolute flex flex-col items-center justify-center w-full h-full px-24 py-8 pt-0 text-center'>
								{children}
							</div>
						</div>
					</div>
				)}

				<div
					className='relative z-10 flex items-center justify-center mx-auto cursor-pointer lg:hidden max-w-max'
					onClick={() => setIsOpen(!isOpen)}
				>
					<Image src={frameMobile} alt={title} />
					<h3
						className='absolute px-2 mb-0 text-lg text-center text-black capitalize sm:text-2xl filter drop-shadow-light'
						onClick={() => setIsOpen(!isOpen)}
					>
						{title}
					</h3>
				</div>

				{isOpen && (
					<div className='z-0 block mt-8 lg:hidden'>
						<div className='relative flex flex-col items-center justify-center mx-auto text-center max-w-max'>
							{children}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
