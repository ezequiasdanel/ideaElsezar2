import { useContext, useEffect, useState } from "react";
import React from 'react'
export const Productos = React.createContext()

export function CartContext({children}){
    const [productosEnCarrito, setProductosEnCarrito] = useState([])


function agregarAlCarrito (product) {
        setProductosEnCarrito([...productosEnCarrito,product])  
    }
    return(
        <Productos.Provider value={{agregarAlCarrito}}>
            {children}
        </Productos.Provider>
    )
}


