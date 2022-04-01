import './App.css';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <ListProducts />
      
        <ItemDetailContainer/>
      
    </div>
    
  );
}
 
export default App;
