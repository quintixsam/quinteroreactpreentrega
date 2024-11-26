import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.scss"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    const getProducts = () => {
        const productsRef = collection( db, "products" )
        getDocs(productsRef)
        .then((dataDb)=> {
        //formateo correcto
        const productsDb = dataDb.docs.map((productDb)=> {
            return { id: productDb.id , ...productDb.data() }
        })
        
        setProducts(productsDb)
        })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryCategories = query( productsRef, where("category", "==", idCategoria) )
        getDocs(queryCategories)
        .then((dataDb)=>{
            const productsDb = dataDb.docs.map((productDb)=>{
            return { id: productDb.id, ...productDb.data() }
            })

            setProducts(productsDb)
        })
    }

    useEffect( ( )=> {
        setLoading(false)
        if(idCategoria){
            getProductsByCategory()
        }else{
            getProducts()
        }
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