import { Fragment } from "react";
import Header from "./componentes/Header/Header"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import { ItemDetailConteiner } from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Paginas/Home/Home";
import { Productos } from "./Paginas/Productos/Productos";
import { Soporte } from "./Paginas/Soporte/Soporte";


function App () {
    return(
        <Fragment>
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Soporte" element={<Soporte/>}/>
        </Routes>
        </BrowserRouter>
        </Fragment>
    )
}
export default App;