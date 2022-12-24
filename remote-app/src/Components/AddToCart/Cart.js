import React from "react";
import useCart from "../../hooks/useCart";

const Cart = () => {
	console.log(useCart());
	const { cart } = useCart();

	return (
		<div>
			<h3>Total Cart Item {cart.length}</h3>
			<ul
				style={{
					height: "250px",
					overflowY: "scroll",
				}}
			>
				{cart.map((item) => (
					<li>
						{item.id} - {item.title} - {item.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
