import React, { useEffect, useState, useContext } from "react"
import "./ItemDetail.css"
import { useParams } from "react-router-dom";
import db from "../../firebase";
import {doc, getDoc } from 'firebase/firestore';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom";

const ItemDetail = ({data}) => {
  const{ id } = useParams();
  const [product, setProduct] = useState({});
  const { cartProducts, addProductToCart} = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);



  const onAdd = (e, contador) => {
      if(!!e & productQuantity<1){
          setProductQuantity(contador);
      }
    }
  const getProduct = async() => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
        
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let product = docSnap.data()
        product.id = docSnap.id
        setProduct(product)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
        
  }


    useEffect( () => {
      getProduct()
  }, [id])
  
  return (
      <div className="card-item">
          <div>
           <img src={`../${product.image}`}/>
          </div>
        <div>
          
             <h2>{product.title}</h2>
             <p>{product.description}</p>
             <p>Precio: ${product.price}</p>
             <p>Stock:{product.stock}</p>
             <p>Talle:{product.talle}</p>
             
              <div>
              {mostrarItemCount ?(
                <ItemCount stock={product.stock} initial={1} action={onAdd}/>
                ):( <Link to="/cart">
                        <button>Finalizar Compra</button>
                    </Link>
                    )
            }
              </div>  
              
        </div>
      </div>

        
    )
}

export default ItemDetail;