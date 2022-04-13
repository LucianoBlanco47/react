import React,{ useState, useEffect, useContext} from "react"
import "./Card.css"
import { useNavigate } from "react-router-dom"
import CartContext from "../Context/CartContext"
import ItemCount from '../ItemCount/ItemCount'


export default function Card({ data, action }) {
    const {title, price, talle, stock, image, id} = data
    const navigate= useNavigate()
    const { cartProducts, addProductToCart} = useContext(CartContext)
    const [ contador, setContador ] = useState(1)
    const [ contadorTest, setContadorTest ] = useState(1)

    useEffect( () => {
        console.log("cartProducts:", cartProducts)
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])


    const changePage=() =>{
        navigate(`/category/${id}`)
    }
    
    const addToCart =(e) => {
        e.stopPropagation()
        console.log("Productos agregados: ", cartProducts)
        addProductToCart(data)
    } 

    

    return(
        <div className="card-item" onClick={changePage}>
            <img src={image} alt={image}/>
            
          <div className="container-card-data" > 
             <h2>{title}</h2>
             <p>Precio : $ {price}</p>
             <p>Talle : {talle}</p>
             
             <br></br>
             <button onClick={addToCart}  >Comprar</button>
          </div>
        </div>
    )
}
