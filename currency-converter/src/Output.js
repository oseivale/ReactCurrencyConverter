import React from "react";
import { v4 } from "uuid";

import cadFlag from './images/Flag_of_Canada_(Pantone).svg';
import mexFlag from './images/1200px-Flag_of_Mexico.svg.png'
import euro from './images/euro-logo.png'
import usFlag from './images/1200px-Flag_of_the_United_States.svg.png'
import ghFlag from './images/255px-Flag_of_Ghana.svg.png'

import './styles.css'

function Output({
	users,
	calculateConversion,
	toCurrency,
	fromCurrency,
	conversionAmount
}) {

	const currencyImg = (currency) => {
		let img;

		if(currency === 'CAD') {
			img = cadFlag
		} else if (currency === 'USD'){
			img = usFlag
		} else if (currency === 'MXN'){
			img = mexFlag
		} else if( currency === 'GHS'){
			img = ghFlag
		} else {
			img = euro
		}

		return img
	}

	return (
		<div>
			{users.length <= 1 &&
				users.map(item => {
					return (
						<div
							className="p-3 mt-5 pl-5 pr-5 pt-5 bg-white shadow-lg border border-light rounded"
							key={v4()}>
							<h4>Hi, {item.firstName}!</h4>
							<p>Here are the details of your transaction:</p>
							<p>
								You converted {conversionAmount.amount} {fromCurrency}<span><img class="currency-img" src={currencyImg(fromCurrency)} /></span> to: {toCurrency}<span><span><img class="currency-img" src={currencyImg(toCurrency)} /></span></span>
							</p>
							
							<h4>
								Which is:{" "}
							</h4>
							<h2 class="text-success">
							{parseFloat(conversionAmount.amount) > 0
									? calculateConversion(
											conversionAmount.amount,
											fromCurrency,
											toCurrency
									  )
									: 0}{" "}
								{toCurrency}
							</h2>

						</div>
					);
				})}
		</div>
	);
}

export default Output;
