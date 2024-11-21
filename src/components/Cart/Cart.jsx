import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"; 

const Cart = () => {
    const { cart, totalPrice, deleteproductById, deleteCart } = useContext(CartContext)

  //Early Return
  if(cart.length === 0){
    return(
      <div>
        <h2>No Tienes Nada en el Carrito 🛒🛒🛒</h2>
        <Link to="/">Volver al Inicio</Link>
      </div>
    )
  }
  
  return (
    <div>
        <h2>Productos Añadidos al Carrito</h2>
        {
        cart.map((productCart)=> (
            <div key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
                <img src={productCart.image} width={100} alt="" />
                <p>{productCart.name}</p>
                <p>Cantidad: {productCart.quantity}</p>
                <p>Precio Unidad: {productCart.price}</p>
                <p>Precio Parcial: {productCart.quantity * productCart.price}</p>

                <button onClick={ () => deleteproductById(productCart.id) } ><MdDelete /></button>
            </div>
        ))
        }

        <p>Precio total: {totalPrice()}</p>
        <button onClick={deleteCart}>Eliminar Carrito</button>
    </div>
  )
}
export default Cart