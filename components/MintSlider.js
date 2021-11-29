import React, { useState } from "react";
import Slider, { Handle } from "rc-slider";
import "rc-slider/assets/index.css";
import Image from "next/image";
import tooltip from "../public/imgs/tooltip.svg";
import handle from "../public/imgs/virus-slider.png";

export default function MintSlider(props) {
	const [tokenCount, setTokenCount] = useState(1);
	// const mint = useCallback(() => {}, [tokenCount, setTokenCount]);
	const price = 0.069 * tokenCount;
	return <></>;
}
