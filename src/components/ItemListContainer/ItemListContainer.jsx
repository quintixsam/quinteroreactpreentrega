import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect( ( )=> {
        setLoading(true)

        getProducts()
        .then( (dataProducts) => {
            if(idCategoria){
                //fitrar por categoria datos
                const filterProducts = dataProducts.filter( (product)=> product.category === idCategoria )
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
            setLoading(false)
        })
    }, [idCategoria])


    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {
                loading === true ? (
                    <div>Cargando...</div>
                ) : (
                    <ItemList products={products} />
                )
            }
        </div>
    )
}
export default ItemListContainer