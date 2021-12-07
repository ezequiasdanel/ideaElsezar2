import { Fragment } from "react";
import Header from "./componentes/Header/Header"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import { ItemDetailConteiner } from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Paginas/Home/Home";
import { Productos } from "./Paginas/Productos/Productos";
import { Soporte } from "./Paginas/Soporte/Soporte";
import { Cart } from "./Paginas/Cart/Cart";
import {CartContext} from './context/CartContext'


function App () {
    return(
        <Fragment>
        <BrowserRouter>
        <CartContext>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Productos/*" element={<Productos/>}/>
        <Route path="/Soporte" element={<Soporte/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </CartContext>
        </BrowserRouter>
        </Fragment>
    )
}
export default App;