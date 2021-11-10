import { Fragment } from "react";
import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
function App () {
    return(
        <Fragment>
        <Header />
        <ItemListContainer greeting="Bienvenidos a Control Alt Suprimir Informatica"/>
        </Fragment>
    )
}
export default App;