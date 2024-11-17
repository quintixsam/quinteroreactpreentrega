import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cart, totalPrice, deleteproductById, deleteCart } = useContext(CartContext)
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

                <button onClick={ () => deleteproductById(productCart.id) } >Eliminar Producto</button>
            </div>
        ))
        }

        <p>Precio total: {totalPrice()}</p>
        <button onClick={deleteCart}>Eliminar Carrito</button>
    </div>
  )
}
export default Cart