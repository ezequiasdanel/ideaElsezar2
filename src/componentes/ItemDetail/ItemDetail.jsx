import { Item } from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
export const ItemDetail = ({id,nombre,precio,img,desc,stock,onAdd,irAlCarrito}) =>{

    return (
        <div key={id}>
            <img src={img} width="300px"/>
            <h1>{nombre}</h1>
            <b>Precio : ${precio}</b>
            <p>{desc}</p>
            <p>stock disponible : {stock}</p>
            {irAlCarrito ?
             (<>
            <Link to="/cart">Finalizar Compra</Link>
            </>) 
            : 
            (<>
            <ItemCount stock={stock} onAdd={onAdd}/>
            </>)}
            
            
        </div>
    )

}
