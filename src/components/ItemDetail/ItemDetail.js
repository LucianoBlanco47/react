import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import mockProductos from "../Products/Products";
import "./ItemDetail.css"



const ItemDetail = () => {

    // const{ title, description, image, stock, price } = props;

    return (
        <div className="card-item">
            <div>
                {/* <img src={image} alt={title}/> */}
            </div>

            <div>
              <div>
                  <h2>remera1</h2>
                  <p>camiseta Negra y Roja</p>
                  <p>$9000</p>
                  <p>12 coutas de $ { (9000/12).toFixed(2)}</p>
                  <p>stock : 15</p>
                  {/* <ItemCount stock={ stock} /> */}
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
 