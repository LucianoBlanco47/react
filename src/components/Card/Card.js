
import "./Card.css"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from "react-router-dom"


export default function Cards({ data }) {
    const {title, price, talle, stock, image, id} = data
    const navigate= useNavigate()
    const changePage=() =>{
        navigate(`/category/${id}`)
    }
    
    const addToCart =(e) => {
        e.stopPropagation()
        console.log("Agrego al carrito")
    }

    

    return(
        <div className="card-item" onClick={changePage}>
            <img src={image} alt={image}/>
            
          <div className="container-card-data" > 
             <h2>{title}</h2>
             <p>Precio : $ {price}</p>
             <p>Talle : {talle}</p>
             
             <br></br>
             <button onClick={addToCart}>Agregar al Carrito</button>
          </div>
        </div>
    )
}