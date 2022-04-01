import { useState, useEffect } from 'react';
import mockProductos from '../ListProducts'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{

    const [props, setProps ] = useState({});

    const getProducts = () =>{
        return new Promise ( (resolve,reject) =>{
            return resolve (mockProductos);
        })
    }

    useEffect( ()=>{
         getProducts().then( (product) =>{
             setProps(product)
         })
    },[])
    
    return(
        <div>
            <ItemDetail props={ props }/>
        </div>
    )
};

export default ItemDetailContainer;