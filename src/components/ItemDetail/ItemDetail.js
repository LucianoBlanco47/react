import React, { useEffect, useState } from "react"
import mockProductos from "../Products/Products";
import "./ItemDetail.css"
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"


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
    const addProduct = (aasd) => {

        alert (`Has agregado ${aasd} producto/s`)
    
    
    
    
    
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
                  <p className='mostrarCantidad'>Cantidad:<ItemCount stock={product.stock} addProduct={addProduct} /></p>
                </div>

              
            </div>
        </div>

        
    )
}
export default ItemDetail;
 