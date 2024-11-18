import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartwidget" >
        <BsCartFill className={ quantity === 0 ? "empty-cart" : "icon-cart" }/>
        <p>{ quantity >= 1 && quantity  }</p>
        </Link>
    )
}
export default CartWidget