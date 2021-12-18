import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "../../data/Productos/Productos";
import { Productos } from "../../context/CartContext";

import { db } from "../../index";
import { doc, getDoc } from "firebase/firestore";

export function ItemDetailConteiner() {
    const [Item,setItem] = useState({})
    const {itemId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const {agregarAlCarrito} = useContext(Productos)
    //Funcion para agregar al carrito
    const onAdd = (cantidad) => {
        if(cantidad > 0 ){
        setIrAlCarrito(true);
        agregarAlCarrito({id:Item.id, nombre:Item.nombre,precio:Item.precio,stock:Item.stock,image:Item.image,tipo:Item.img,desc:Item.desc} , cantidad);
        }else{
            alert('la cantidad debe ser mayor a 0')
        }
    };
    useEffect(()=>{
        const traerItem = doc (db, 'Productos', itemId)
        getDoc(traerItem)
        .then((resp)=> {
            const result = {id:resp.id, ...resp.data()};
            setItem(result)
        // itemId && setItem(resp.find((item) => item.id === itemId));
    })
    .finally(()=>{
        setIsLoading(false);
    });
},[itemId]);
    return isLoading ? <h1>....Cargando Producto....</h1> :(
    <div key={Item?.id}>
    <ItemDetail nombre={Item?.nombre} precio={Item?.precio} image={Item?.image} desc={Item.desc} stock={Item.stock} onAdd={onAdd} irAlCarrito={irAlCarrito}/>
    </div>);
}
   
