import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.scss"
import { MdDelete } from "react-icons/md"; 

const Cart = () => {
    const { cart, totalPrice, deleteproductById, deleteCart } = useContext(CartContext)

  //Early Return
  if(cart.length === 0){
    return(
      <div className="empty-cart">
        <h2 className="tittle-empty-cart">No Tienes Nada en el Carrito 🛒🛒🛒</h2>
        <Link to="/" className="button-home-empty-cart">Volver al Inicio</Link>
      </div>
    )
  }
  
  return (
    <div className="cart">
        <h2 className="titte-cart">Productos Añadidos al Carrito</h2>
        {
        cart.map((productCart)=> (
            <div className="item-cart" key={productCart.id}>
                <img className="img-item-cart" src={productCart.image} width={100} alt="" />
                <p className="text-item-cart">{productCart.name}</p>
                <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                <p className="text-item-cart">Precio Unidad: {productCart.price}</p>
                <p className="text-item-cart">Precio Parcial: {productCart.quantity * productCart.price}</p>

                <button className="delete-item-cart" onClick={ () => deleteproductById(productCart.id) } >
            <MdDelete />
            </button>
          </div>
        ))
        }

        <p>Precio total: {totalPrice()}</p>
        <button onClick={deleteCart}>Eliminar Carrito</button>
    </div>
  )
}
export default Cart