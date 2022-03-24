import React,{ useState } from "react"
import "./Card.css"
import ItemCount from "../ItemCount/ItemCount"


export default function Card({ data }) {
    const {title, price, talle, stock} = data
    const[ contador, setContador ] = useState(1)

    

    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <ItemCount stock={stock}/>
            <br></br>
            <button>Agregar al Carrito</button>
        </div>
    )
}