import { useState, useEffect } from 'react'
import Cards from '../Card/Card'
import mockProductos from '../Products/Products'

const ListProducts = () => {

  
 const [products, setProducts] = useState([])

 const getProducts =() => {
    return new Promise ((resolve, reject)=>{
      return resolve(mockProductos)

    }) 
 }


 useEffect(() => {
       getProducts().then((data)=>{
         setProducts(data)
 
     })
    },[])
    
    

    

 return(
        <div className="container-cards">
          {products.map( (product)=> {
              return(
                <Cards data={product} key={product.id}/>
              )
          })}
        </div>
    )
}

export default ListProducts