import { createContext, useState } from "react"; 

const CartContext = createContext ();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [cuantosProductos, setCuantosProductos] = useState();

    const addProductToCart = (product, productQuantity) =>{
        
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })
        if(indiceEncontrado === -1){
            product.cantidad = productQuantity;
            setCartProducts(cartProducts => [...cartProducts, product]);
            cartCantProductos();
        }else{
            if (product.stock < (product.cantidad + productQuantity)){
            }else{
                cartProducts[indiceEncontrado].cantidad += productQuantity;
                cartCantProductos();
            }
        }
    }
    const cartTotal = () => {
        
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.price*product.cantidad;
        });
        return total
    }
    const cartLength = () => {
        
        let largo = cartProducts.length;
        return largo
    }
    
    const cartCantProductos = () => {
        let cantidad = 0;
        for(const producto of cartProducts){
            cantidad = cantidad + producto.cantidad;
        }
        setCuantosProductos(cantidad);
    }

    const restarUno = (id) => {
        
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        if(indiceEncontrado === -1){
            return;
        }else{
           
            if (cartProducts[indiceEncontrado].cantidad>1){
                cartProducts[indiceEncontrado].cantidad -= 1;
                cartCantProductos();
            }
        }
    }
    const removeItem = (id) => {
       
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        
        cartProducts.splice(indiceEncontrado, 1);
        cartCantProductos();
    }
    const cleanCart = () => {
        setCartProducts([]);
        cartCantProductos();
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }
    const addToCart =(e) => {
        e.stopPropagation()
        console.log("Productos agregados: ", cartProducts)
        addProductToCart(data)
      } 

      const cartQty = () => {
        return cartProducts.reduce((total, product) => total += product.cantidad, 0)
    }
        

    
    const data = {
        cartProducts,
        cuantosProductos,
        addProductToCart,
        cartCantProductos,
        cartLength,
        cartTotal,
        restarUno,
        removeItem,
        deleteProduct,
        cleanCart,
        addToCart,
        cartQty
    }
    //return
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext