import React, { useState } from "react";
import Header from "./Header";
import ConversionForm from "./ConversionForm";
import Output from "./Output";

function App() {
	// Initial State Variables
	const initialFormData = {
		firstName: "",
		lastName: ""
	};

	const initialConversionAmount = {
		amount: 0
	};

	// Application State
	const [formData, setFormData] = useState(initialFormData);
	const [users, setUsers] = useState([]);
	const [fromCurrency, setFromCurrency] = useState("CAD");
	const [toCurrency, setToCurrency] = useState("USD");
	const [selectedYesNo, setSelectedYesNo] = useState(false);
	const [conversionAmount, setConversionAmount] = useState(
		initialConversionAmount
	);

	// Handles the first and last name input feilds
	const handleFormData = event => {
		setFormData({
			...formData,

			[event.target.name]: event.target.value
		});
	};

	// Handles the currency we convert FROM
	const handleFromCurrency = event => {
		setFromCurrency(event.target.value);
	};

	// Handles the currency we convert TO
	const handleToCurrency = event => {
		setToCurrency(event.target.value);
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
		} else if (fromCurrency === "CAD" && toCurrency === "GHS") {
			conversionFactor = 4.42;
		} // Conversion from USD
		else if (fromCurrency === "USD" && toCurrency === "MXN") {
			conversionFactor = 21.85;
		} else if (fromCurrency === "USD" && toCurrency === "EUR") {
			conversionFactor = 0.84;
		} else if (fromCurrency === "USD" && toCurrency === "GHS") {
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
		} else if (fromCurrency === "MXN" && toCurrency === "GHS") {
			conversionFactor = 0.26;
		} // Conversion from EUR
		else if (fromCurrency === "EUR" && toCurrency === "CAD") {
			conversionFactor = 1.56;
		} else if (fromCurrency === "EUR" && toCurrency === "USD") {
			conversionFactor = 1.2;
		} else if (fromCurrency === "EUR" && toCurrency === "GHS") {
			conversionFactor = 6.89;
		} else if (fromCurrency === "EUR" && toCurrency === "MXN") {
			conversionFactor = 26.14;
		} // Conversion from GHS
		else if (fromCurrency === "GHS" && toCurrency === "CAD") {
			conversionFactor = 0.23;
		} else if (fromCurrency === "GHS" && toCurrency === "USD") {
			conversionFactor = 0.17;
		} else if (fromCurrency === "GHC" && toCurrency === "MXN") {
			conversionFactor = 3.79;
		} else if (fromCurrency === "GHS" && toCurrency === "EUR") {
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

	// Handles the Yes or No option selected for additional user actions
	const handleOptionYesNo = event => {
		setSelectedYesNo(event.target.value);
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
		setUsers(users => users.concat(formData));
	};

	return (
		<div className="App">
			<Header />
			<ConversionForm
				formData={formData}
				handleFormData={handleFormData}
				handleAmountChange={handleAmountChange}
				handleOptionYesNo={handleOptionYesNo}
				selectedYesNo={selectedYesNo}
				handleSubmit={handleSubmit}
				handleFromCurrency={handleFromCurrency}
				conversionAmount={conversionAmount}
				fromCurrency={fromCurrency}
				handleToCurrency={handleToCurrency}
				toCurrency={toCurrency}
				handleConversionFactor={handleConversionFactor}
				calculateConversion={calculateConversion}
			/>
			<Output
				users={users}
				calculateConversion={calculateConversion}
				conversionAmount={conversionAmount}
				fromCurrency={fromCurrency}
				toCurrency={toCurrency}
			/>
			<p className="text-center">&copy; 2020 Valerie Osei</p>
		</div>
	);
}

export default App;
