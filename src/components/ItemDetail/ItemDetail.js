import React from "react"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ props }) => {

    const{ title, description, image, stock, price } = props;

    return (
        <div >
            <div>
                <img src={image}/>
            </div>

            <div>
              <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>${price}</p>
                  <p>12 coutas de $ { (price/12).toFixed(2)}</p>
                  {stock>3 ? <p className="stock">stock disponible</p> : <p className="stockOut">Sin stock</p> }
                  <ItemCount stock={ stock} />
                </div>

              <div>
                  <button>Comprar</button>
                  <button>Agregar al Carro</button>

                </div>
            </div>
        </div>

        
    )
}
export default ItemDetail;
 