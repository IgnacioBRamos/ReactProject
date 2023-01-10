import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { CartContextProvider } from './context/cartContex';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">    
        <Navbar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
        <Footer/>  

        </div>
      </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
