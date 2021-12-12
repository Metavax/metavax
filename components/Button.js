import React from 'react'
import Image from 'next/image'
import button from '../public/imgs/button-bg.png'

export default function Button(props) {
	return (
		<>
			{props.link === undefined ? (
				<button onClick={props.OnClick} className='banger relative select-none bg-no-repeat bg-cover bg-center flex justify-center items-center hover:scale-105 transform transition-all duration-300 ease-in-out'>
					<Image
						className='w-full h-full'
						src={button}
						alt={props.txt}
					/>
					<p className='absolute text-black uppercase m-0 lg:text-3xl text-2xl filter drop-shadow-light leading-none'>
						{props.txt}
					</p>
				</button>
			) : (
				<a
						href={props.link}
					className='banger relative select-none bg-no-repeat bg-cover bg-center flex justify-center items-center hover:scale-105 transform transition-all duration-300 ease-in-out'
				>
					<Image src={button} alt={props.txt} />
					<p className='absolute text-black uppercase m-0 lg:text-3xl text-2xl filter drop-shadow-light leading-none'>
						{props.txt}
					</p>
				</a>
			)}
		</>
	)
}
