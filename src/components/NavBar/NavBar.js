import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, link } from 'react-router-dom';
import { useState, useContext } from 'react';

function NavBar(props) {
    

    return(
        <header className='main-header'>  
         <div className='container-logo'>
             <Link to={'/'}>
             <img src="../logo192.png"className="img-header" />
             </Link>
           </div>
         <ul className= 'navbar'>
             
             <li><button><Link to={'/'}>Inicio</Link></button></li>
             <li><button><Link to={'/Tienda'}>Tienda</Link></button></li>
             <li><button><Link to={'/Contacto'}>Contacto</Link></button></li>
         </ul>   
         <CartWidget/>

     </header>

    )
}
export default NavBar