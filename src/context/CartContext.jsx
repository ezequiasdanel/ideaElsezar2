import { useContext,  useState } from "react";
import React from 'react'
export const Productos = React.createContext()

export function CartContext({children}){
    const [productosEnCarrito, setProductosEnCarrito] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const isOnCart  = (product)=>{
        return productosEnCarrito.findIndex(item => item.id === product.id)
    }
    const deleteFromCart = (id) => {
        const myItem = productosEnCarrito.find ((item)=> item.id === id)
        const cartAux = productosEnCarrito.filter ((item)=> item.id !== id)

        setProductosEnCarrito(cartAux);
        setUnidades(unidades - myItem.cantidad)
        setPrecioTotal(precioTotal - myItem.subtotal)
    }
    const vaciarCarrito = () =>{
        setProductosEnCarrito ([])
        setPrecioTotal(0)
        setUnidades(0)
    }

function agregarAlCarrito (product, cantidad) {
    if(isOnCart(product) === -1){
         setProductosEnCarrito([
             ...productosEnCarrito,{
             ...product,
             cantidad: cantidad,
             subtotal: product.precio * cantidad,
            },
            ])
        setPrecioTotal(precioTotal + product.precio * cantidad) 
        setUnidades(unidades + cantidad);
    }else{
        const cartAux = productosEnCarrito.map((item) =>{
            if(item.id === product.id){
                item.cantidad += cantidad;
                item.subtotal += product.precio * cantidad;
            }
            return item;
        })
        setProductosEnCarrito(cartAux)
        setPrecioTotal(precioTotal + product.precio * cantidad)
        setUnidades(unidades + cantidad);
    }
       
    }


    return(
        <Productos.Provider value={{agregarAlCarrito, productosEnCarrito,deleteFromCart,unidades,precioTotal,vaciarCarrito}}>
            {children}
        </Productos.Provider>
    )
}


export function useCartIn (){
    return useContext(Productos).productosEnCarrito
}
export function useDeleteFromCart (){
    return useContext(Productos).deleteFromCart
}
export function useClearCart(){
    return useContext(Productos).vaciarCarrito
}