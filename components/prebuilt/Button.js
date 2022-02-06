import Link from "next/link";

export default function Button({ link, text, bg, color }) {
	return (
		<>
			{link ? (
				<Link href={link} passHref>
					<div className={`btn ${bg} ${color}`}>{text}</div>
				</Link>
			) : (
				<button className={`btn ${bg} ${color}`}>{text}</button>
			)}
		</>
	);
}
