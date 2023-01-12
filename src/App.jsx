import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { CartContextProvider } from './context/cartContex';

import Cart from './components/Cart';
import ItemListContainers from './components/ItemListContainers';
import ItemDetailContainers from './components/ItemDetailContainers';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">    
        <Navbar/>

        <Routes>       
          <Route path='/' element={<ItemListContainers/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainers/>}/>
          <Route path='/items/:id' element={<ItemDetailContainers/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
        <Footer/>  

        </div>
      </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
