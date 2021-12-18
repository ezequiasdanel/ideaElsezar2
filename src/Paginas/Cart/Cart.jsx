import  './index.css'
import { useContext } from "react"
import { Productos, useCartIn, useDeleteFromCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'



export function Cart (){

    const {unidades, precioTotal} = useContext(Productos)
    const productosEnCarrito = useCartIn()
    const deleteFromCart = useDeleteFromCart()
    console.log(productosEnCarrito)






    return unidades > 0 ? (
        <div className="cart-prodcuts">
            <h1 className="title-cart">Carrito</h1>
            <article>
                {productosEnCarrito?.map((item)=>{
                    const{
                        image,
                        nombre,
                        precio,
                        id,
                    } = item
                    return(
                        <div className='conteiner-in-cart' key={id}>
                        <img src={image} alt={image} className ='imagen-in-cart' />
                        <div className="descripcion-cart">
                        <span>{nombre}</span>
                        <b>Precio ${precio}</b>
                        <p>cantidad: {item.cantidad}</p>
                        <p>subtotal: {item.subtotal}</p>
                        <button onClick={() => deleteFromCart(id)} className="button-delete">Borrar Producto</button>
                        </div>
                        </div>
                    )
                })}
            </article>
             <h2>Total : {precioTotal}</h2>
             <Link to="/Productos">Seguir Comprando</Link>
        </div>
    ) : (
        <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/Productos">Comprar</Link>
        </div>
    )
    }