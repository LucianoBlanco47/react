import { useState, useEffect } from 'react'
import Cards from '../Card/Card'
import mockProductos from '../Products/Products'
import { useParams } from 'react-router-dom'


const ListProducts = () => {

  
  const {category} = useParams()
  const [products, setProducts] = useState([])

  
  const getProducts = () => {
      return new Promise ((resolve, reject) => {
          return resolve(mockProductos)
      })
  }
  
  useEffect( () => {
      setProducts([])
      getProducts().then( (productos) => {
          category ? filterProductByCategory(productos, category) : setProducts(productos)
      })
  }, [category])

  const filterProductByCategory = (array , category) => {
      return array.map( (product, i) => {
          if(product.category === category) {
             return setProducts(products => [...products, product]);
          }
      })
  }
    
    

    

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