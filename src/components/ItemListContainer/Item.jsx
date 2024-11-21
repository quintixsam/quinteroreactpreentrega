import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="product-card">
        <img src={product.image} className="product-image" alt="" width={200} />
        <div className="product-info">
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <Link to={"/detail/"+ product.id} className="button-detail" > Ver Mas... </Link>  
    </div>
    </div>
  )
}
export default Item