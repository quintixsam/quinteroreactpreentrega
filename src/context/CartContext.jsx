import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([])

const addProductInCart = (newProduct) => {
    setCart( [ ...cart, newProduct ] )
}

// cantidad total productos
const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
}

//precio total compra de todo
const totalPrice = () => {
    const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price, 0))
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

