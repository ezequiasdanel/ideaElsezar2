import { Item } from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({id,nombre,precio,img,desc,stock,onAdd,irAlCarrito}) =>{
    return (
        <div key={id}>
            <img src={img} width="300px"/>
            <h1>{nombre}</h1>
            <b>Precio : ${precio}</b>
            <p>{desc}</p>
            {irAlCarrito ?
             (<>
            <Link to="/cart">Terminar Compra</Link>
            </>) 
            : 
            (<>
            <ItemCount stock={stock} onAdd={onAdd}/>
            </>)}
            
            
        </div>
    )

}
