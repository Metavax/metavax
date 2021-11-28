import React, { useCallback, useState } from "react";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import tooltip from "../public/imgs/tooltip.svg";
import handle from "../public/imgs/virus-slider.png";

export default function MintSlider() {
	const [tokenCount, setTokenCount] = useState(1);
	const mint = useCallback(() => {}, [tokenCount, setTokenCount]);
	return (
		<>
			<div className='max-w-xl mx-auto'>
				<Slider
					onChange={setTokenCount}
					min={1}
					max={10}
					defaultValue={tokenCount}
					handle={(handleProps) => (
						<Handle {...handleProps} ariaValueTextFormatter={undefined}>
							<div className='relative left-0 h-12 w-12'>
								<div className='absolute bottom-12 flex justify-center items-center'>
									<span className='absolute z-10 leading-none text-black text-xl mx-auto left-4 top-1'>
										{tokenCount}
									</span>
									<Image src={tooltip} alt='Slider Tooltip' />
								</div>
								<Image src={handle} alt='Slider Handle' />
							</div>
						</Handle>
					)}
					handleStyle={{ border: "none", backgroundColor: "transparent" }}
				/>
			</div>
		</>
	);
}
