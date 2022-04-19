import React,{ useState, useEffect, useContext} from "react"
import "./Card.css"
import { Link } from 'react-router-dom';
import CartContext from "../Context/CartContext"
import ItemCount from '../ItemCount/ItemCount'


 function Card({ data}) {
    const {title, price, talle, stock, image, id} = data
    const {addProductToCart, cartProducts} = useContext(CartContext)
    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
   
    const onAdd = (e, contador) => {
        if(!!e & productQuantity<1){
            setProductQuantity(contador);
        }

    }
    useEffect( () => {
        if(productQuantity>0){
            setMostrarItemCount(false);
            addProductToCart(data, productQuantity);
        }
    },[productQuantity]) 

    const addToCart =(e) => {
        e.stopPropagation()
        console.log("Productos agregados: ", cartProducts)
        addProductToCart(data)
      } 
        
    

    return(
        <div className="card-item" >
             <Link to={`/category/${id}`}>
               <img src={image} alt={image} />
             </Link>
          <div className="container-card-data" > 
             <h2>{title}</h2>
             <p>Precio : $ {price}</p>
             <p>Talle : {talle}</p>
             
          </div>
          {mostrarItemCount ?(
                <ItemCount stock={stock} initial={1} action={onAdd}/>
                ):( <Link to="/cart">
                        <button>Finalizar Compra</button>
                    </Link>
                    )
            }
        </div>
          
      
        
    )
}
export default Card