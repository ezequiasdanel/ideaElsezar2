import { Fragment } from "react";
import Header from "./componentes/Header/Header"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";

function App () {
    return(
        <Fragment>
        <Header />
        <ItemListContainer/>
        <ItemCount/>
        </Fragment>
    )
}
export default App;