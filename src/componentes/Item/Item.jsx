import './index.css'
import { Link } from 'react-router-dom'
export const Item = ({item}) => {
    return (
        <Link to = {`/Productos/view/${item.id}`}>
        <div className="cajaComponentes__cardProduct">
            <img src={item.img} width="110px" className="cajaComponentes__imagen" alt=''/>
            <h5 className ="cajaComponentes__productos">{item.nombre}</h5>
            <b>$ {item.precio}</b>
            <p> Categoria: {item.tipo}</p>
        </div>
        </Link>
    )
}
