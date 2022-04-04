import React, { useEffect, useState } from "react"
import mockProductos from "../Products/Products";
import "./ItemDetail.css"
import { useParams } from "react-router-dom";



const ItemDetail = () => {
    const{ id } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductId(mockProductos, id)
    },[])

    const filterProductId = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        } )
    }
    

    return (
        <div className="card-item">
            <div>
                <img src={`../${product.image}`}/>
            </div>

            <div>
              <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Precio: ${product.price}</p>
                  <p>Stock:{product.stock}</p>
                  <p>Talle:{product.talle}</p>
                  
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
 