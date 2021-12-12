import React, { useState, useEffect } from "react";

const TimeBlock = ({ time, type }) => {
	return (
		<div className='flex flex-col items-center justify-center mx-4'>
			<p className='mb-3 text-6xl font-bold text-secondary filter drop-shadow-text'>
				{time}
			</p>
			<h4 className='uppercase filter drop-shadow-text'>{type}</h4>
		</div>
	);
};

export default function CountDown({ date, children }) {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const leading0 = (num) => {
		return num < 10 ? "0" + num : num;
	};

	const getTimeUntil = (date) => {
		const time = Date.parse(date) - Date.parse(new Date());
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		setInterval(() => getTimeUntil(date), 1000);

		return () => getTimeUntil(date);
	}, [date]);

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<div className='text-center'>
					<div className='flex flex-col py-32'>
						{Date.parse(new Date()) >= Date.parse(date) ? (
							<>{children}</>
						) : (
							<>
								<h2 className='mb-1'>Time Till Mint</h2>
								<div className='flex flex-row mt-8 mb-10'>
									<TimeBlock time={leading0(days)} type='Days' />
									<TimeBlock time={leading0(hours)} type='Hours' />
									<TimeBlock time={leading0(minutes)} type='Minutes' />
									<TimeBlock time={leading0(seconds)} type='Seconds' />
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
