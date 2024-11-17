import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className="cartwidget" >
        <BsCartFill className="icon-cart" color="lime" />
        <p>{ totalQuantity() }</p>
        </Link>
    )
}
export default CartWidget