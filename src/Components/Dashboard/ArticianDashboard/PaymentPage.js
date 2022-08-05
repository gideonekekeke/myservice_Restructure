import React from "react";

import { usePaystackPayment } from "react-paystack";

const PaymentPage = () => {
	const config = {
		reference: new Date().getTime().toString(),
		email: "shotkode123@gmail.com",
		amount: 500 * 100,
		publicKey: "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2",
	};

	// you can call this function anything
	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.

		console.log(reference);
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const initializePayment = usePaystackPayment(config);
	return (
		<div>
			<a
				onClick={() => {
					initializePayment(onSuccess, onClose);
				}}
				href='#'
				class='theme-btn btn-style-three'>
				Proceed to Payment
			</a>
		</div>
	);
};

export default PaymentPage;
