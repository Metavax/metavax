export default function Wrapper(props) {
	return (
		<>
			<div className={`w-full py-36 md:py-56 px-12 md:px-0 ${props.className}`}>
				<div className='container w-full h-full'>{props.children}</div>
			</div>
			<div className='w-[65%] mx-auto h-[1px] bg-white opacity-25' />
		</>
	);
}
