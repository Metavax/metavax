export default function Tile({ children }) {
	return (
		<>
			<div className='bg-secondary shadow-harsh flex-center rounded-2xl relative flex-col w-full gap-4 p-6'>
				{children}
			</div>
		</>
	);
}
