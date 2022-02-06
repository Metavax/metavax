import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import nav from "../../public/img/nav-frame.png";

export default function Modal({
	children,
	className,
	btnTextOpen,
	btnTextClose,
	btnClass,
}) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen === true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isOpen]);

	return (
		<>
			<button
				className={`${btnClass} transition-all duration-300 transform z-[99]`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? btnTextOpen : btnTextClose}
			</button>
			<AnimatePresence>
				{isOpen && (
					<>
						<div
							className='backdrop-filter flex-center backdrop-blur-sm fixed top-0 left-0 flex-col w-screen h-screen'
							onClick={() => setIsOpen(false)}
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								className='rounded-3xl modal relative shadow-xl'
							>
								<div className='absolute mt-2 w-[15rem]'>
									<Image src={nav} alt='nav background' layout='responsive' />
								</div>
								<div className={`modal-content relative text-xl ${className}`}>
									{children}
								</div>
							</motion.div>
						</div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
