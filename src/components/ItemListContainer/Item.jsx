import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <Link to={"/detail/"+ product.id}>Ver Mas...
        <img src={product.image} width={300} alt="" />
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
    </Link>     
  )
}
export default Item