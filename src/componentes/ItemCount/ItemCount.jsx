import React, {Fragment, useState} from 'react';
import './../ItemCount/index.css'
function ItemCount({stock}){
    const [count,setCount]= useState(1)
    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        if(count > 0){
     setCount(count - 1)}
    }
    return (
            <div className="ContadorCard">
           <div className="Contador"><button onClick={restar} className="resta">-</button> <h1 className="count">{count}</h1><button onClick={sumar} className="suma">+</button></div>
           </div>
    )

}

export default ItemCount