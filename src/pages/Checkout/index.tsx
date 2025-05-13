import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Checkout = () => {
	const { cartItems  } = useContext(CartContext)
	console.log("🚀 ~ Checkout ~ cartItems:", cartItems)
	
	return <div>Checkout</div>;
};

export default Checkout;
