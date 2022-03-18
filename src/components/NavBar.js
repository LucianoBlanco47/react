
function NavBar() {

    return(
        <header className='main-header'>  
         <div className='container-logo'>
          <img
          src="logo192.png"
          className="img-header" 
          />
         </div>
         <ul className= 'navbar'>
             <li><button>Inicio</button></li>
             <li><button>Historia</button></li>
             <li><button>Estadisticas</button></li>
             <li><button>Tienda</button></li>
             <li><button>Contacto</button></li>
         </ul>   
     </header>

    )
}
export default NavBar 