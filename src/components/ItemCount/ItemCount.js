import React,{useState} from "react"
const ItemCount = ({stock}) => {
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
      </>
    )
}

export default ItemCount