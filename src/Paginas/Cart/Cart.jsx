import  './index.css'
import { useContext, useState } from "react"
import { Productos, useCartIn, useDeleteFromCart,useClearCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { db } from '../../index'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'




export function Cart (){

    const {unidades, precioTotal} = useContext(Productos)
    const productosEnCarrito = useCartIn()
    const deleteFromCart = useDeleteFromCart()
    const clearCart = useClearCart()
    const [dataForm, setDataForm] = useState({
        nombre:"",
        email:"",
        confirmarEmail:"",
        telefono:"",
    })

    const actualizarForm = e => {
        setDataForm({...dataForm, [e.target.name]: e.target.value})
    }
    const finalizarCompra = e => {
        e.preventDefault();
        if(dataForm.nombre.trim() !== ""
        && dataForm.email.trim() !== ""
        && dataForm.confirmarEmail.trim()!== ""
        && dataForm.telefono.trim() !== ""
        && dataForm.email === dataForm.confirmarEmail){
            const reft = collection(db,"ordenDeCompra");
            const cartc = {comprador: {...dataForm}, productosEnCarrito, date: serverTimestamp(), total: precioTotal}
            addDoc(reft,cartc).then(res =>{
                alert(`Tu orden de compra es : ${res.id}`)
                clearCart()
            })
    }else{
        alert("¡Revisa que los datos que ingresaste sean correctos!")
    }
}




    return unidades > 0 ? (
        <div className='conteiner-cart'>
        <div className="cart-prodcuts">
            <h1 className="title-cart">Carrito</h1>
            <article>
                {productosEnCarrito?.map((item)=>{
                    const{
                        img,
                        nombre,
                        precio,
                        id,
                    } = item
                    return(
                        <div className='conteiner-in-cart' key={id}>
                        <img src={img} alt={img} className ='imagen-in-cart' />
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
             <h2>Total :$ {precioTotal}</h2>
             <Link to="/Productos">Seguir Comprando</Link>
        </div>
                        <form onSubmit={e => finalizarCompra(e)} className='form-shop'>
                        <h2 className='title-form'>Formulario de compra</h2>
                        <label>Nombre y apellido</label>
                        <input type="text" value={dataForm.nombre} name="nombre" onChange={(e) => actualizarForm(e)} required />
                        <label>e-mail</label>
                        <input type="mail" value={dataForm.email} name="email" onChange={(e) => actualizarForm(e)} required />
                        <label>Confirmar e-mail</label>
                        <input type="mail" value={dataForm.confirmarEmail} name="confirmarEmail" onChange={(e) => actualizarForm(e)} required />
                        <label>Telefono</label>
                        <input type="number" value={dataForm.telefono} name="telefono" onChange={(e) => actualizarForm(e)} required />
                        <input type="submit" value="Finalizar Compra" />
                    </form>
             </div>
    ) : (
        <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/Productos">Comprar</Link>
        </div>
    )
    }