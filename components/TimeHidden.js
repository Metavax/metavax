import React, { useState, useEffect } from "react";

export default function TimeHidden({ date, preSale, publicSale }) {
	return (
		<>
			{Date.parse(new Date()) <= Date.parse(date) ? (
				<>{preSale}</>
			) : (
				<>{publicSale}</>
			)}
		</>
	);
}
