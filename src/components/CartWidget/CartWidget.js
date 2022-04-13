import { useState, useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartContext from '../Context/CartContext';



const CartWidget = () => {
    const { cartProducts, setCartProducts} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }
    
    
    console.log("cartProducts: ", cartProducts)

    return (
        <div>
            <div>
               <img src="../carrito.png"
                className="carrito" 
                onClick={handleClick}/>
            </div>
            <p>{cartProducts.length}</p>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'scroll',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <div  key={cartProduct.id}>
                            <div >
                                <img src={`../${cartProduct.image}`} /> 
                            </div>
                            <div >
                                <p>{cartProduct.title}</p>
                                <span>$ {cartProduct.price}</span>
                            </div>
                            <div >
                                <button  onClick={() => deleteProduct(cartProduct)}>
                                  <img src={`../iconbasura.png`} alt="iconobasura"/>
                                </button>
                            
                            </div>
                        </div>
                    )
                })}
                
                <Divider />
                <div>
                    <Button className="btn-custom"><Link to="/cart">Iniciar la compra</Link></Button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget