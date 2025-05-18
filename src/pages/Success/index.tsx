import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Success = () => {
    const { orderDetails } = useContext(CartContext)
    console.log(" Success ~ orderDetails:", orderDetails)
  
  
	return <div>Success</div>;
};

export default Success;
