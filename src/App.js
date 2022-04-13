import './App.css';
import React,{ useState, } from "react";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contacto from './Pages/Contacto';
import Tienda from './Pages/Tienda';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './Pages/Cart';
import {CartProvider} from './components/Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
      
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category' element={<HomePage/>}/>
            <Route path='/category/:id' element={<ItemDetail/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<NotFound/>}/>
         


        
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
    
    </div>
    
  );
}
 
export default App;
