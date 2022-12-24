import { CartContext } from "../contexts/AddToCartProvider";
import { useContext } from "react";
const useCart = () => {
	return useContext(CartContext);
};


export default useCart;