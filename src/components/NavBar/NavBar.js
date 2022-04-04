import "./NavBar.css"
import CartWidget from "./CartWidget/CartWidget"
import { Link, link } from 'react-router-dom';

function NavBar() {

    return(
        <header className='main-header'>  
         <div className='container-logo'>
          <img
          src="../logo192.png"
          className="img-header" 
          />
         </div>
         <ul className= 'navbar'>
             <li><button><Link to={'/'}>Inicio</Link></button></li>
             <li><button>Historia</button></li>
             <li><button>Estadisticas</button></li>
             <li><button>Tienda</button></li>
             <li><button><Link to={'/Contacto'}>Contacto</Link></button></li>
         </ul>   
         <CartWidget/>

     </header>

    )
}
export default NavBar