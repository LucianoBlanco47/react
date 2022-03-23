import './App.css';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListProducts contenido="Proximamente Tienda Millonaria !"/>
    </div>
  );
}

export default App;
