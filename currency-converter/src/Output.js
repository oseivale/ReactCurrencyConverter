import React from "react";
import { v4 } from "uuid";

function Output({
	users,
	calculateConversion,
	toCurrency,
	fromCurrency,
	conversionAmount
}) {
	return (
		<div className="container">
			{users.length <= 1 &&
				users.map(item => {
					return (
						<div
							className="container col-lg-4 mt-5 mb-5 border-bottom"
							key={v4()}>
							<h3>Hi, {item.firstName}</h3>
							<p>Here are the details of your transaction:</p>
							<h4>
								You converted {conversionAmount.amount} {fromCurrency} to{" "}
								{toCurrency}
							</h4>
							<h4>
								Which is:{" "}
								{parseFloat(conversionAmount.amount) > 0
									? calculateConversion(
											conversionAmount.amount,
											fromCurrency,
											toCurrency
									  )
									: 0}{" "}
								{toCurrency}
							</h4>
						</div>
					);
				})}
		</div>
	);
}

export default Output;
