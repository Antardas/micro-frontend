import React, { createContext, useState } from "react";

export const CartContext = createContext("");

const AddToCartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (data) => {
		console.log(data, `-------add to cart ------------`);
		if (cart.find((cartItem) => cartItem.id === data.id)) {
			setCart((cart) =>
				cart.map((cartItem) =>
					cartItem.id === data.id
						? {
								...cartItem,
								total: cartItem.price + data.price,
								quantity: cartItem.quantity + 1,
						  }
						: cartItem
				)
			);
			return;
		}

		setCart((cart) => [
			...cart,
			{
				...data,
				total: data.price,
				quantity: 1, // NOTE: if user provide quantity when add to cart button set here that quantity
			},
		]);
	};
	const removeFromCart = () => {
		console.log("Called ---- Remove Cart");
	};
	const clearCart = () => {
		console.log("Called ---- Clear Cart");
	};

	return (
		<CartContext.Provider
			value={{
				addToCart,
				removeFromCart,
				clearCart,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default AddToCartProvider;
