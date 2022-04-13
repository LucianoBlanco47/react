import React,{useState} from "react"

const ItemCount = ({stock}) => {
  const [contador, setContador] = useState(1)

  const onAdd = () => {
      if(contador < stock) {
          setContador(contador + 1)
      }
  }
  return(
      <>
          <button>-</button>
          <p>{contador}</p>
          <button onClick={onAdd}>+</button>
      </>
  )
}

export default ItemCount