import { useState } from "react"
import "./Itemcount.scss"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

const handleClickRest = () => {
    if(count > 1){ 
    setCount(count - 1)
    }
}

const handleClickAdd = () => {
    if(count < stock){ 
    setCount(count + 1)
    }
}

  return (
    <div className="item-count">
    <div className="controls-count">
        <button onClick={handleClickRest}>-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd}>+</button>
        </div>
        <button className="button-add" onClick={ () => addProduct(count) } >Añadir Al carrito</button>
    </div>
  )
}
export default ItemCount