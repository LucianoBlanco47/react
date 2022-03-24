import "./Card.css"

export default function Card({price , talle , title}) {
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
            <button>Comprar</button>
        </div>
    )
}