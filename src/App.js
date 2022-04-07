import './App.css';
import React,{ useState } from "react";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contacto from './Pages/Contacto';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/category' element={<HomePage/>}/>
         <Route path='/category/:id' element={<ItemDetail/>}/>
         <Route path='/contacto' element={<Contacto/>}/>
         <Route path='*' element={<NotFound/>}/>
         


        
      </Routes>
      </BrowserRouter>
      
    
    </div>
    
  );
}
 
export default App;
