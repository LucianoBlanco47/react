import React,{ useState } from "react"
import "./Card.css"
import ItemCount from "../ItemCount/ItemCount"


export default function Card({ data }) {
    const {title, price, talle, stock, id, image} = data
    

    

    return(
        <div className="card-item">
            <img src={image} alt={image}/>
            
          <div className="container-card-data" > 
             <h2>{title}</h2>
             <p>Precio : $ {price}</p>
             <p>Talle : {talle}</p>
             <ItemCount stock={stock}/>
             <br></br>
             <button>Agregar al Carrito</button>
          </div>
        </div>
    )
}