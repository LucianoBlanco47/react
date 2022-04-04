import './App.css';
import React,{ useState } from "react";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';
import ListProducts from './components/ListProducts/ListProducts';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListProducts/>
      <ItemDetail/>
    
    </div>
    
  );
}
 
export default App;
