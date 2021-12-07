import { useContext, useEffect, useState } from "react";
import React from 'react'
const Productos = React.createContext()

export function CartContext({children}){
    const [productosEnCarrito, setProductosEnCarrito] = useState([])


    const agregarAlCarrito = (product) => {
        setProductosEnCarrito(product)
    }
    return(
        <Productos.Provider value={{agregarAlCarrito}}>
            {children}
        </Productos.Provider>
    )
}

export function useAddToCart () {
    return useContext(Productos).agregarAlCarrito
}


export default Productos