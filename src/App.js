import './App.css';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <ListProducts />
    </div>
  );
}
 
export default App;
