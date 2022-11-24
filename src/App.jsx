import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">    
      <div><Navbar/></div>
      <div>
        <ItemListContainer greeting='hola'/>
      </div>
        
    </div>
    
  );
}

export default App;