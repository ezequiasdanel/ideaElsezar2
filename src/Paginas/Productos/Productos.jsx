import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailConteiner } from "../../componentes/ItemDetailConteiner/ItemDetailConteiner";
import { ItemListContainer } from "../../componentes/ItemListContainer/ItemListContainer";


export function Productos (){
    return(
        <Fragment>
            <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categorias/:catId" element={<ItemListContainer/>}/>
            </Routes>

        </Fragment>
    )
}