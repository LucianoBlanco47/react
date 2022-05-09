import { useState, useContext } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartContext from '../Context/CartContext';



const CartWidget = () => {
    const { cartProducts, removeItem, cleanCart, cantidad} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
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
                        <MenuItem  key={cartProduct.id}>
                            <div >
                                <img src={`../${cartProduct.image}`} /> 
                            </div>
                            <div >
                                <p>{cartProduct.title}</p>
                                <span>$ {cartProduct.price * cartProduct.cantidad}</span>
                                <p>Cantidad: {cartProduct.cantidad}</p>
                            </div>
                            <div >
                                <button  onClick={ removeItem }>
                                  <img src={`../iconbasura.png`} alt="iconobasura"/>
                                </button>
                            
                            </div>
                        </MenuItem>
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