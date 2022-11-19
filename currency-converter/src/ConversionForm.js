import React from "react";
import { Button, Form, FormGroup } from "reactstrap";
import './styles.css';

function ConversionForm({
	formData,
	handleFormData,
	handleSubmit,
	handleAmountChange,
	conversionAmount,
	calculateConversion
}) {

	return (
			<Form className="form-group p-3 mt-5 pl-5 pr-5 pt-5 bg-white shadow-lg border border-light rounded">
				<h4 className="mb-5">Please enter the information below</h4>
				<div>
					<label className="mb-2">First Name</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
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
						value={formData.lastName}
						onChange={handleFormData}
						placeholder="Enter your last name"
						className="form-control p-1 shadow-sm mb-1"
					/>
				</div>
				<h4 className="mt-5 mb-3">Would you like to convert your currency?</h4>
				<div>
					<label>Yes</label>
					<input
						type="radio"
						name="selectedYesNo"
						value="Yes"
						checked={formData.selectedYesNo === "Yes"}
						onChange={handleFormData}
						className="mr-5 ml-2"
					/>
					<label>No</label>
					<input
						type="radio"
						name="selectedYesNo"
						value="No"
						checked={formData.selectedYesNo === "No"}
						onChange={handleFormData}
						className="mr-5 ml-2"
					/>
				</div>
				{formData.selectedYesNo === "Yes" && (
					<div className="mt-5">
						<label htmlFor="fromAmount">Enter amount to convert from:</label>
						<FormGroup row>
							<input
								type="text"
								name="amount"
								onChange={handleAmountChange}
								placeholder="E.g. $100"
								className="ml-3"
							/>
							<select name="fromCurrency" value={formData.fromCurrency} onChange={handleFormData}>
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="MXN">MXN</option>
								<option value="GH₵">GH₵</option>
								<option value="EUR">EUR</option>
							</select>
						</FormGroup>
						<h4 className="mt-5 mb-3">
							Currency to be converted:
						</h4>
						<p> ${conversionAmount.amount}{" "}
							{formData.fromCurrency}</p>
						<label htmlFor="toAmount">Convert to:</label>
						<FormGroup row>
							<select
								name="toCurrency"
								value={formData.toCurrency}
								onChange={handleFormData}
								className="ml-3 p-1">
								<option value="CAD">CAD</option>
								<option value="USD">USD</option>
								<option value="MXN">MXN</option>
								<option value="GH₵">GH₵</option>
								<option value="EUR">EUR</option>
							</select>
						</FormGroup>
						<h4 className="mt-5 mb-3">
							You are converting from {formData.fromCurrency} to {formData.toCurrency}
						</h4>
						<div className="text-primary">
							<h5>
								Your total amount is:{" "}
								</h5>
								<h2>
									$
									{conversionAmount.amount > 0
										? calculateConversion(
												conversionAmount.amount,
												formData.fromCurrency,
												formData.toCurrency
										  )
										: 0}{" "}
									{formData.toCurrency}
								</h2>
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
	);
}

export default ConversionForm;
