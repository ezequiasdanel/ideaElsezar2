import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export function ItemDetailConteiner() {
    const [Item,setItem] = useState()
    const item = {
        id: 1,
        marca: 'AMD',
        name:'ryzen 5',
        modelo: '5600G',
        precio: 52000,
        tipo:'procesador',
        stock: 10,
        img: 'https://www.sahuaperu.com.pe/wp-content/uploads/2020/11/PROCESADOR-AMD-RYZEN-3-3100.jpg',
        desc:"Este es un procesador de 5ta generacion de la marca Amd con arquitectura ryzen, Es de lo mas potente de el mercado con su placa de video integrada se puede jugar a muchos juegos sin gastar tanta energia y con los 4 nucleos y 4 hilos que tiene el procesador es optimo para muchas tareas de diseño."
    }
    useEffect(()=>{
        const traerItem =new Promise((resolve)=>{
            setTimeout (() => {
                resolve(Item)
        },3000);
        });
        traerItem
        .then((resp)=> setItem(resp))
    })
    return(
        <div key={item?.id}>
            <ItemDetail name={item?.name} precio={item?.precio} img={item?.img} desc={item?.desc}/>
        </div>
    )
}