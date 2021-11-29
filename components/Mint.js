import React, { useState } from "react";
import Image from "next/image";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "./Button";
import ButtonText from "./ButtonText";
import squid from "../public/imgs/squid-virus.png";
import tooltip from "../public/imgs/tooltip.svg";
import handle from "../public/imgs/virus-slider.png";

export default function Mint(props) {
	const [tokenCount, setTokenCount] = useState(1);
	const price = (0.069 * tokenCount).toFixed(3);

	return (
		<>
			<div id='mint' className='relative'>
				<ButtonText>
					Price <span className='price'>{price}</span> ETH
				</ButtonText>

				<div className='py-24'>
					<div className='max-w-xl mx-auto'>
						<Slider
							onChange={setTokenCount}
							min={1}
							max={10}
							defaultValue={tokenCount}
							handle={(handleProps) => (
								<Handle {...handleProps} ariaValueTextFormatter={undefined}>
									<div className='relative left-0 w-12 h-12'>
										<div className='absolute flex items-center justify-center bottom-12'>
											<span className='absolute z-10 mx-auto text-xl leading-none text-black left-4 top-1'>
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
				</div>

				<div className='relative flex items-center justify-center'>
					<div className='absolute'>
						<Image src={squid} alt='Squid' />
					</div>
					<Button txt='Mint' />
				</div>

				<div className='mt-4 text-center light-text'>
					<p className='mb-4'>*Maximum 3 MetaVax in Pre-sale</p>
					<p>*Maximum 10 MetaVax per transaction in public sale.</p>
					<p>Transactions unlimited.</p>
				</div>
			</div>
		</>
	);
}
