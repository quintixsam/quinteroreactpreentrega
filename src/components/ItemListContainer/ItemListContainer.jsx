import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { idCategoria } = useParams()

    useEffect( ( )=> {
        getProducts()
        .then( (dataProducts) => {
            if(idCategoria){
                //fitrar por categoria datos
                const filterProducts = dataProducts.filter( (product)=> product.categoria === idCategoria )
                setProducts(filterProducts)
            }else{
                //guardar todos los products
                setProducts(dataProducts)
            }
        })
        .catch( (error)=> {
        console.error(error)
        })
        .finally( ()=> {
            console.log("finalizo la promesa")
        })
    }, [idCategoria])


    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer