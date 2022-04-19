import React,{useState} from "react"

const ItemCount = ({stock, initial, action}) => {
  const [contador, setContador] = useState(initial)

  const onAdd = () => {
      if(contador < stock) {
          setContador(contador + 1)
      }
  }
  const onRest = () => {
    if(contador > initial) {
        setContador(contador - 1)
    }
}
  return(
      <div>
          <div>
              <button onClick={onRest} disabled={contador === 1 ? true : false}>-</button>
               <br></br>
                <p>{contador}</p>
                
              <button onClick={onAdd} disabled={contador === stock ? true : false}>+</button>
          </div>
          <div className="spaceBtn">
                <button onClick={(e) => action(e, contador)}>Agregar al carrito</button>
            </div>
      </div> 
  )
}

export default ItemCount