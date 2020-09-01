import React from "react";
import { Button, Form, FormGroup } from "reactstrap";

function ConversionForm({
	handleFormData,
	handleSubmit,
	handleAmountChange,
	conversionAmount,
	handleOptionYesNo,
	selectedYesNo,
	handleFromCurrency,
	handleToCurrency,
	fromCurrency,
	toCurrency,
	calculateConversion
}) {
	return (
		<div className="container col-lg-4 mt-5">
			<Form className="form-group p-3 mt-5 pl-5 pr-5 pt-5 bg-white shadow-lg border border-light rounded">
				<h3 className="mb-5">Please enter the information below</h3>
				<div>
					<label className="mb-2">First Name</label>
					<input
						type="text"
						name="firstName"
						onChange={handleFormData}
						placeholder="Enter your first name"
						className="form-control p-1 shadow-sm mb-4"
					/>
				</div>
				<div>
					<label className="mb-2">Last Name</label>
					<input
						type="text"
						name="lastName"
						onChange={handleFormData}
						placeholder="Enter your last name"
						className="form-control p-1 shadow-sm mb-1"
					/>
				</div>
				<h3 className="mt-5 mb-3">Would you like to convert your currency?</h3>
				<div>
					<label>Yes</label>
					<input
						type="radio"
						value="Yes"
						checked={selectedYesNo === "Yes"}
						onChange={handleOptionYesNo}
						className="mr-5 ml-2"
					/>
					<label>No</label>
					<input
						type="radio"
						value="No"
						checked={selectedYesNo === "No"}
						onChange={handleOptionYesNo}
						className="mr-5 ml-2"
					/>
				</div>
				{selectedYesNo === "Yes" && (
					<div className="mt-5">
						<label for="fromAmount">Enter amount to convert from:</label>
						<FormGroup row>
							<input
								type="text"
								name="amount"
								onChange={handleAmountChange}
								placeholder="E.g. $100"
								className="ml-3"
							/>
							<select value={fromCurrency} onChange={handleFromCurrency}>
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="MXN">MXN</option>
								<option value="GHS">GHS</option>
								<option value="EUR">EUR</option>
							</select>
						</FormGroup>
						<h3 className="mt-5 mb-3">
							Currency to be converted: ${conversionAmount.amount}{" "}
							{fromCurrency}
						</h3>
						<label for="toAmount">Convert to:</label>
						<FormGroup row>
							<select
								value={toCurrency}
								onChange={handleToCurrency}
								className="ml-3 p-1">
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="MXN">MXN</option>
								<option value="GHS">GHS</option>
								<option value="EUR">EUR</option>
							</select>
						</FormGroup>
						<h3 className="mt-5 mb-3">
							You are converting from {fromCurrency} to {toCurrency}
						</h3>
						<div className="text-primary">
							<h5>
								Your total amount is:{" "}
								<h2>
									$
									{conversionAmount.amount > 0
										? calculateConversion(
												conversionAmount.amount,
												fromCurrency,
												toCurrency
										  )
										: 0}{" "}
									{toCurrency}
								</h2>
							</h5>
						</div>
					</div>
				)}

				<div>
					<Button
						className="bg-success col-lg-12 p-2 mt-5"
						onClick={handleSubmit}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default ConversionForm;
