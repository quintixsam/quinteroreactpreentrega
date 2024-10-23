import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect( ( )=> {
        getProducts()
        .then( (dataProducts) => {
        setProducts(dataProducts)
        })
        .catch( (error)=> {
        console.error(error)
        })
        .finally( ()=> {
            console.log("finalizo la promesa")
        })
    }, [] )

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer