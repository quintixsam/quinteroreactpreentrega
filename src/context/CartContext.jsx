import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])

const addProductInCart = (newProduct) => {

    const condicion = inIncart(newProduct.id)
    if(condicion){
        //sumar cantidades
        const tempCart = [...cart]
        const findIndex = tempCart.findIndex( (productCart)=> productCart.id === newProduct.id )
        tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity

        setCart(tempCart)
    }else{
        //guardar como nuevo
        setCart( [ ...cart, newProduct ] )
    }
}

//funcion devuelve true/false, depende del producto en el carrito si esta a comprobar
const inIncart = (idProduct) => {
    return cart.some( (productCart) => productCart.id === idProduct )
}

// cantidad total productos
const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
}

//precio total compra de todo
const totalPrice = () => {
    const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price), 0)
    return price
}

const deleteproductById = (idProduct) => {
    const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProducts)
}

const deleteCart = () => {
    setCart ([])
}

return( 
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteproductById, deleteCart } } >
        {children}
    </CartContext.Provider>
)
}

export { CartProvider, CartContext }

