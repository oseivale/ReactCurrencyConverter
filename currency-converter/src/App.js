import React, { useState, useEffect } from "react";
import Header from "./Header";
import ConversionForm from "./ConversionForm";
import Output from "./Output";

function App() {

	// Initial state variables
	const initialConversionAmount = {
		amount: 0
	};

	let date = new Date();

	// Application State
	const [conversionAmount, setConversionAmount] = useState(
		initialConversionAmount
	);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		fromCurrency: "CAD",
		toCurrency: "USD",
		selectedYesNo: false,
		submitted: false
	})

	// Handles the first and last name input feilds
	const handleFormData = event => {
		setFormData({
			...formData,

			[event.target.name]: event.target.value
		});
	};

	// Handles the currency conversion factor
	const handleConversionFactor = (fromCurrency, toCurrency) => {
		let conversionFactor;
		// Conversion from CAD
		if (fromCurrency === "CAD" && toCurrency === "USD") {
			conversionFactor = 0.77;
		} else if (fromCurrency === "CAD" && toCurrency === "MXN") {
			conversionFactor = 16.79;
		} else if (fromCurrency === "CAD" && toCurrency === "EUR") {
			conversionFactor = 0.64;
		} else if (fromCurrency === "CAD" && toCurrency === "GH₵") {
			conversionFactor = 4.42;
		} // Conversion from USD
		else if (fromCurrency === "USD" && toCurrency === "MXN") {
			conversionFactor = 21.85;
		} else if (fromCurrency === "USD" && toCurrency === "EUR") {
			conversionFactor = 0.84;
		} else if (fromCurrency === "USD" && toCurrency === "GH₵") {
			conversionFactor = 5.76;
		} else if (fromCurrency === "USD" && toCurrency === "CAD") {
			conversionFactor = 1.3;
		} // Conversion from MXN
		else if (fromCurrency === "MXN" && toCurrency === "USD") {
			conversionFactor = 0.046;
		} else if (fromCurrency === "MXN" && toCurrency === "CAD") {
			conversionFactor = 0.06;
		} else if (fromCurrency === "MXN" && toCurrency === "EUR") {
			conversionFactor = 0.038;
		} else if (fromCurrency === "MXN" && toCurrency === "GH₵") {
			conversionFactor = 0.26;
		} // Conversion from EUR
		else if (fromCurrency === "EUR" && toCurrency === "CAD") {
			conversionFactor = 1.56;
		} else if (fromCurrency === "EUR" && toCurrency === "USD") {
			conversionFactor = 1.2;
		} else if (fromCurrency === "EUR" && toCurrency === "GH₵") {
			conversionFactor = 6.89;
		} else if (fromCurrency === "EUR" && toCurrency === "MXN") {
			conversionFactor = 26.14;
		} // Conversion from GHS
		else if (fromCurrency === "GH₵" && toCurrency === "CAD") {
			conversionFactor = 0.23;
		} else if (fromCurrency === "GH₵" && toCurrency === "USD") {
			conversionFactor = 0.17;
		} else if (fromCurrency === "GH₵" && toCurrency === "MXN") {
			conversionFactor = 3.79;
		} else if (fromCurrency === "GH₵" && toCurrency === "EUR") {
			conversionFactor = 0.15;
		} // Trying to convert same currency
		else if (fromCurrency === toCurrency) {
			conversionFactor = 1;
		}

		return conversionFactor;
	};

	// Perform the currency conversion calculation
	const calculateConversion = (amount, from, to) => {
		const total =
			parseFloat(amount).toFixed(2) * handleConversionFactor(from, to);

		return parseFloat(total).toFixed(2);
	};

	// Handles the amount to be converted
	const handleAmountChange = event => {
		setConversionAmount({
			...conversionAmount,

			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setFormData(prevState => {
			return { ...prevState, submitted: true }
		})
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		  })
	};

	useEffect(() => {
		console.log(formData)
	}, [formData])

	return (
		<div className="App">
			<Header />
			<div className="container">
			<div className="row">
				<div className="col-sm">
				<ConversionForm
					formData={formData}
					handleFormData={handleFormData}
					handleAmountChange={handleAmountChange}
					conversionAmount={conversionAmount}
					handleConversionFactor={handleConversionFactor}
					calculateConversion={calculateConversion}
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className="col-sm">	
				<Output
					formData={formData}
					calculateConversion={calculateConversion}
					conversionAmount={conversionAmount}
				/>
			</div>
			</div>
			</div>
			<p className="my-5 text-center">&copy; {date.getFullYear()} Valerie Osei</p>
		</div>
	);
}

export default App;
