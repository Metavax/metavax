import React from "react";
import FAQAccordian from "./FAQAccordian";
import Button from "../Button";

export default function FAQ() {
	return (
		<>
			<div id='faq' className='py-36'>
				<h2 className='mb-12 text-center filter drop-shadow-text text-secondary'>
					F.A.Q
				</h2>
				<FAQAccordian title='What is MetaVax' large={false}>
					<p>
						MetaVax is a collection of 6,019 NFT's stored on the Ethereum
						Blockchain. There is a virus spreading within the metaverse
						infecting all NFT collections, however a group of scientist have
						created a scarce amount within their clinic! Grab one before its too
						late!
					</p>
				</FAQAccordian>

				<FAQAccordian title='How many whitelist spots' large={false}>
					<p>There is a total of 650 whitelist spots available.</p>
				</FAQAccordian>

				<FAQAccordian title='How many MetaVax’s can I mint?' large={false}>
					<p>
						Pre-sale members will be able to mint a total of 5 MetaVax’s each. A
						total of 1,950 MetaVax’s max will be minted during pre-sale.
						Unlimited mints during the public sale!
					</p>
				</FAQAccordian>

				<FAQAccordian
					title='When can I mint and how much does a MetaVax cost?'
					large={false}
				>
					<p>
						18th December 2021 (pre-sale)
						<br />
						19th December 2021 (public sale)
					</p>
					<p>
						Each MetaVax will cost 0.069 ETH. Connect your meta-mask wallet,
						ensuring you have enough ETH to cover the gas fee.
					</p>
				</FAQAccordian>

				<FAQAccordian title='What is the future of MetaVax?' large={true}>
					<p>
						We have a lot in the works for the future of MetaVax. This will
						include suggestions and ideas from YOU, the community.
					</p>
					<p>
						We are looking at implementing a staking feature, where MetaVax
						holders will send/stake their token on missions around the metaverse
						in order to stop the spreading virus. Completing missions will grant
						research levels and rewards (ETH prizes etc). On this journey,
						collect the four vials to complete the development of dose 2. The
						low supply of dose 2 will increase demand = higher floor/price and
						give incentives for people to stake and burn off dose 1!
					</p>
				</FAQAccordian>

				<div className='relative flex items-center justify-center'>
					<Button txt='Mint' />
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
