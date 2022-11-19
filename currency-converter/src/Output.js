import React from "react";
import { v4 } from "uuid";

import cadFlag from './images/Flag_of_Canada_(Pantone).svg';
import mexFlag from './images/1200px-Flag_of_Mexico.svg.png'
import euro from './images/euro-logo.png'
import usFlag from './images/1200px-Flag_of_the_United_States.svg.png'
import ghFlag from './images/255px-Flag_of_Ghana.svg.png'

import './styles.css'

function Output({
	formData,
	calculateConversion,
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
		} else if( currency === 'GH₵'){
			img = ghFlag
		} else {
			img = euro
		}

		return img
	}

	return (
	<div>
		{formData.submitted && (
			<div
			className="p-3 mt-5 pl-5 pr-5 pt-5 bg-white shadow-lg border border-light rounded"
			key={v4()}>
			<h4>Hi, {formData.firstName}!</h4>
			<p>Here are the details of your transaction:</p>
			<p>
				You converted {conversionAmount.amount} {formData.fromCurrency}<span><img className="currency-img" src={currencyImg(formData.fromCurrency)} /></span> to: {formData.toCurrency}<span><span><img className="currency-img" src={currencyImg(formData.toCurrency)} /></span></span>
			</p>
			
			<h4>
				Which is:{" "}
			</h4>
			<h2 className="text-success">
			{parseFloat(conversionAmount.amount) > 0
					? calculateConversion(
							conversionAmount.amount,
							formData.fromCurrency,
							formData.toCurrency
					  )
					: 0}{" "}
				{formData.toCurrency}
			</h2>

		</div>
		)}
	</div>
						
	);
	
}

export default Output;
