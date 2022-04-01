import { useState, useEffect } from 'react'
import Card from '../Card/Card'

const ListProducts = () => {
const mockProductos = [{
    id: 1,
    title : "Camiseta1", 
    talle : "XL",
    image : "./camiseta1.jpg",
    price : 9000,
    description : "camiseta Negra y Roja",
    stock : 10
  },
  
  {
    id: 2,
    title : "Camiseta2", 
    talle : "L",
    image : "./camiseta2.jpg",
    price : 7500,
    description : "camiseta Roja",
    stock : 20
  },
  {
    id: 3,
    title : "Camiseta3", 
    talle : "S",
    image : "./camiseta3.jpg",
    price : 8500,
    description : "camiseta Blanca",
    stock : 9
  },
  {
    id: 4,
    title : "Camiseta4", 
    talle : "M",
    image : "./camiseta4.jpg",
    price : 4500,
    description : "camiseta Negra ",
    stock : 21
  }]
  
 const [products, setProducts] = useState([])

 const mostrarProductos = new Promise((resolve, reject) => {
      return setTimeout(() =>  {
       resolve(mockProductos);

        }, 2000);
 }); 


 useEffect(() => {
      mostrarProductos()
        .then((data)=>{
          setProducts(data)
      })
      .finally(() => {
        console.log("Termino la llamada")
     })
    },[])
    
    

    

 return(
        <div className="container-cards">
          {products.map( (product, i)=> {
              const {id} = product
              return(
                <Card data={product} key={id}/>
              )
          })}
        </div>
    )
}

export default ListProducts