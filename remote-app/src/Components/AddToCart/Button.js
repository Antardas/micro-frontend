import React from "react";
import useCart from "../../hooks/useCart";

const Button = ({ data = {} }) => {
	const { addToCart } = useCart();
	return (
		<button
			onClick={() => addToCart(data)}
			style={{
				outline: "none",
				background: "cadetblue",
				border: "none",
				padding: "20px 40px",
				borderRadius: "0.2rem",
			}}
		>
			Add To Cart
		</button>
	);
};

export default Button;
