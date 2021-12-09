import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "../../data/Productos/Productos";
import { Productos } from "../../context/CartContext";
export function ItemDetailConteiner() {
    const [Item,setItem] = useState({})
    const {itemId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const {agregarAlCarrito} = useContext(Productos)
    const onAdd = (cantidad) => {
        console.log (cantidad);
        setIrAlCarrito(true);
        agregarAlCarrito({});
    };
    useEffect(()=>{
        const traerItem =new Promise((resolve)=>{
            setTimeout (() => {
            resolve(productos);
        },1000);
        });
        traerItem.then((resp)=> {
        itemId && setItem(resp.find((item) => item.id === itemId));
    })
    .finally(()=>{
        setIsLoading(false);
    });
},[itemId]);
    return isLoading ? <h1>....Cargando Producto....</h1> :(
    <div key={Item?.id}>
    <ItemDetail nombre={Item?.nombre} precio={Item?.precio} img={Item?.img} desc={Item.desc} stock={Item.stock} onAdd={onAdd} irAlCarrito={irAlCarrito}/>
    </div>);
}
  
