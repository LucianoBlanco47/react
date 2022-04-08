import React,{useState} from "react"
import { Link } from 'react-router-dom';

const ItemCount = ({stock, addProduct}) => {
    const Inicial = 1; 
    const[ contador, setContador ] = useState(Inicial)
     

    const onAdd = () => {
         if(contador < stock) {
         setContador(contador + 1)
         }
    }

    const offAdd = () => {
        if(contador > Inicial) {
        setContador(contador - 1)
        }
   }

    

    return(
      <>
         <button onClick={onAdd}>+</button>
         <p>{contador}</p>
         <button onClick={offAdd}>-</button>
         <div>
           <Link to={`/Cart`}>
            <button onClick={() => addProduct(contador)}>Comprar</button>
           </Link>
         </div>
      </>
    )
}


export default ItemCount