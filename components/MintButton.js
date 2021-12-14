import React from "react";
import Image from "next/image";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "./Button";
import ButtonText from "./ButtonText";
import squid from "../public/imgs/squid-virus.png";
import tooltip from "../public/imgs/tooltip.svg";
import sliderImage from "../public/imgs/virus-slider.png";

export default function MintButton(props) {
	return (
		<>
			<div id='mint' className='relative'>
				<ButtonText>
					Price <span className='price'>{props.price}</span> ETH
				</ButtonText>

				<div className='py-24'>
					<div className='max-w-xl mx-auto'>
						<Slider
							onChange={props.tokenSet}
							min={1}
							max={props.max}
							defaultValue={props.tokenCount}
							handle={(handleProps) => (
								<Handle {...handleProps} ariaValueTextFormatter={undefined}>
									<div className='relative left-0 w-12 h-12'>
										<div className='absolute flex items-center justify-center bottom-12'>
											<span className='absolute z-10 mx-auto text-xl leading-none text-black left-4 top-1'>
												{props.tokenCount}
											</span>
											<Image src={tooltip} alt='Slider Tooltip' />
										</div>
										<Image src={sliderImage} alt='Slider Handle' />
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
					<Button onClick={props.click} txt='Mint' />
				</div>

				<div className='mt-4 text-center light-text'>
					<p className='mb-4'>*Maximum 5 MetaVax in Pre-sale</p>
					<p>*Maximum 10 MetaVax per transaction in public sale.</p>
					<p>Transactions unlimited.</p>
				</div>
			</div>
		</>
	);
}
