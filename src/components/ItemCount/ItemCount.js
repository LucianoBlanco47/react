import react,{useState} from "react"
const ItemCount = ({stock}) => {
    const[ contador, setContador ] = useState(0)
     

    const onAdd = () => {
         if(contador < stock) {
         setContador(contador + 1)
         }
    }

    const offAdd = () => {
        if(contador => stock) {
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