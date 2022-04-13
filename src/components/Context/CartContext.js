import { createContext, useState } from "react"; 

const CartContext = createContext ();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, product])
    }

    const calculeTotalPrice = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
           total = cartProduct.price + total
        })

        return total
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }
    
    const removeItem = (id) => {
        
        const indiceEncontrado = cartProducts.findIndex((product)=>{
            return product.id === id;
        })
       
        cartProducts.splice(indiceEncontrado, 1);
    }
    
    const data = {
        cartProducts,
        addProductToCart,
        calculeTotalPrice,
        deleteProduct,
        removeItem,
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext