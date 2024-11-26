import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./ItemDetail.scss"


const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    setShowItemCount(false)
    }

  return (
    <div className="item-detail">
        <img src={product.image} alt={`Imagen de ${product.name}`} className="item-image" />
        <div>
            <h2 className="detail-title">{product.name}</h2>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">Precio: ${product.price}</p>
            {
              showItemCount === true ? (
                <ItemCount stock={product.stock} addProduct={addProduct} />
              ) : (
                <Link to="/cart" className="finalize-link">Finalizar mi Compra</Link>
              )
            }
        </div>
    </div>
  )
}
export default ItemDetail