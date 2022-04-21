import {useState, useContext, useEffect } from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../components/Context/CartContext';
import  '../components/ItemDetail/ItemDetail.css'
import "../components/ItemCount/ItemCount"
import db from "../firebase";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '../../node_modules/firebase/firestore';
import ModalCustom from '../components/Modal/Modal';


function Cart () {
    //VARIABLES
        //Contexto
        const {cartProducts, cartTotal, restarUno, addProductToCart, removeItem, cleanCart, deleteProduct} = useContext(CartContext);
        const navigate = useNavigate();
        const [hayProductos, setHayProductos] = useState(false);
        const [totalDelCart, setTotalDelCart] = useState(cartTotal);
        const [openModal, setOpenModal] = useState(false);
        const [finishedOrder, setFinishedOrder] = useState();
        const [loadingOrder, setLoadingOrder] = useState(true);

        const [formData, setFormData] = useState({
            name: '',
            surname: '',
            phone: '',
            email: ''
        })
        const [order, setOrder] = useState(
            {
                buyer: formData,
                items: cartProducts.map((cartProduct)=>{
                    return{
                        id: cartProduct.id,
                        title: cartProduct.title,
                        cantidad: cartProduct.cantidad,
                        price: cartProduct.price
                    }
                }),
                total: cartTotal()
            }
        );
    //FUNCIONES
        const handleOneLess = (id) =>{
            restarUno(id);
            setTotalDelCart(cartTotal);
        }
        const handleOneMore = (product, uno) =>{
            addProductToCart(product, uno);
            setTotalDelCart(cartTotal);
        }
        const handleDeleteItem = (id) => {
            removeItem(id);
            setTotalDelCart(cartTotal);
        }
        const handleDeleteCart = () =>{
            cleanCart();
            setTotalDelCart(0);
        }
        const handleChange = (e) => {
            const {name, value} = e.target
            setFormData({
                ...formData,
                [name]: value
            })
        }
        const handleClose = () =>{
            if(finishedOrder){
                cleanCart();
                navigate('/');
            }else{
                setOpenModal(false)
            }
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            setOrder({...order, buyer: formData});
            let prevOrder = {...order, buyer: formData};
            sendOrder(prevOrder);
        }
        const sendOrder = async(prevOrder) => {
            setLoadingOrder(false);
            const orderFirebase = collection(db, 'Ordenes');
            const orderDoc = await addDoc(orderFirebase, prevOrder);
            console.log("orden generada: ", orderDoc.id)
            setFinishedOrder(orderDoc.id)
            setLoadingOrder(true);
        }
        //useEffect
        useEffect(()=>{
            if(totalDelCart > 0){
                setHayProductos(true)
            }else{
                setHayProductos(false)
            }
        },[totalDelCart])
    return(
        <Container > 
            
            <div  >
                
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, talle, id, stock, } = cartProduct
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
                <Button onClick={cleanCart} variant="contained" color="error">Vaciar carrito</Button> 
                    <Button  color="error" >Continuar comprando</Button>
                    <div >
                        <div >
                            <p>Total</p>
                            <span>${cartTotal()}</span>
                        </div>
                        <Button variant="contained" color="error" onClick={()=>{setOpenModal(true)}} >Completar Compra</Button>
                    </div>
                </div>
            </div>
            <ModalCustom handleClose={()=>handleClose()} open={openModal}>
                {finishedOrder?(
                    <div className="card-item">
                        <h3>Su orden se generó correctamente</h3>
                        <p>Número de orden: <strong>{finishedOrder}</strong></p>
                        <p>¡Muchas gracias por su compra!</p>
                    </div>
                ):(loadingOrder?(
                    <div className='formBuy'>
                        <h2>Formulario de Compra</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre/s</label>
                                <input type="text" name='name' placeholder='Ingrese su nombre o nombres'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>
                            <div>
                                <label>Apellido/s</label>
                                <input type="text" name='surname' placeholder='Ingrese su apellido o apellidos'
                                    onChange={handleChange}
                                    value={formData.surname}
                                />
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="number" name='phone' placeholder='Ingrese su teléfono de contacto'
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="mail" name='email' placeholder='Ingrese la dirección  de correo'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="success" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                    
                ):(
                    <h2>Procesando solicitud...</h2>
                )
                )}
            </ModalCustom>
        </Container>
    )
}

export default Cart
