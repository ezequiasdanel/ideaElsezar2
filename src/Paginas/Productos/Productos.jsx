import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilterProducts } from "../../componentes/FilterProducts/FilterProducts";
import { ItemDetailConteiner } from "../../componentes/ItemDetailConteiner/ItemDetailConteiner";
import { ItemListContainer } from "../../componentes/ItemListContainer/ItemListContainer";


export function Productos (){
    return(
        <Fragment>
            <FilterProducts/>
            <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/:catId" element={<ItemListContainer/>}/>
            </Routes>

        </Fragment>
    )
}