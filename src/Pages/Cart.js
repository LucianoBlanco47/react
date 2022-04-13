import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../components/Context/CartContext';
import  '../components/ItemDetail/ItemDetail.css'
import "../components/ItemCount/ItemCount"

const Cart = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice } = useContext(CartContext)

    console.log("cartProducts:", cartProducts)
    return(
        <Container > 
            <div  >
                
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, talle, id, stock } = cartProduct
                    return(
                        <div className="card-item"  key={id}>
                            <div >
                                <img src={`./${image}`} />
                            </div>
                            <div >
                                <p>{title}</p>
                                <span>Talle : <b>{talle}</b></span>
                            </div>
                            <div >
                                <p>$ {price}</p>
                            </div>
                            <div >
                                <p>Stock:{stock}</p>
                            </div>
                            
                            <div>
                                <button  onClick={() => deleteProduct(cartProduct)}>
                                  Eliminar Producto
                                </button>
                            </div>
                        </div>
                    )
                })}
                
                <div className="card-item">
                    <Button >Continuar comprando</Button>
                    <div >
                        <div >
                            <p>Subtotal</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <div >
                            <p>Total</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <Button >Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart
