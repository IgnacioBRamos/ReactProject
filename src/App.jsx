import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">    
      <Navbar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      
      <Footer/>  

      </div>
    </BrowserRouter>
  );
}

export default App;
