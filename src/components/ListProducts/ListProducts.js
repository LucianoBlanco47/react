import { useState, useEffect } from 'react'
import Cards from '../Card/Card'

import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'

const ListProducts = () => {

  
  const {category} = useParams()
  const [products, setProducts] = useState([])

  
  const getProducts = async () => {
    const itemCollection = collection(db, 'productos')   
    const productosSnapshot = await getDocs(itemCollection)  
    const  productList = productosSnapshot.docs.map((doc) => {
             let product = doc.data()
             product.id = doc.id
             console.log('product:', product)
             return product  
         }
    )
    return productList
    
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
        <div>
          {products.map( (product)=> {
              return(
                <Cards data={product} key={product.id}/>
              )
          })}
        </div>
    )
}

export default ListProducts