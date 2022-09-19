import {useState} from "react";
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from "./components/CartContainer/CartContainer";
import {TheamContext} from './context/ThemeContex'
import { PaginaFirebase } from "./components/PaginaFirebase/PaginaFirebase";
import './components/style.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import products from "./components/Products/products";
import { CartProvider } from "./context/CartContext";


function App() {
    return ( 
    <CartProvider>
        <BrowserRouter>  
            <div className = "App" >          
                <Navbar/>
                    <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/tienda' element={<ItemListContainer/>} />
                    <Route path='/tienda/:tipoGenero/:tipoProducto' element={<ItemListContainer/>} />
                    <Route path='/item/:productId' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<CartContainer/>} />
                    <Route path='/firebase' element={<PaginaFirebase/>} />                  
                    </Routes> 
            </div>;  
        </BrowserRouter>
    </CartProvider>
    )
}



export default App;




   
       


