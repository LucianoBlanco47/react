import { useState, useEffect } from 'react';
import ListProducts from '../ListProducts/ListProducts';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () =>{

    const [props, setProps ] = useState({});

    const getProducts = () =>{
        return new Promise ( (resolve,reject) =>{
            return resolve (ListProducts);
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