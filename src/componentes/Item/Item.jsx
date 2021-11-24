import './index.css'
import ItemCount from "../ItemCount/ItemCount"
export const Item = ({item}) => {
    return (
        <div key = {item.id} className="cajaComponentes__cardProduct">
            <img src={item.img} width="110px" className="cajaComponentes__imagen"/>
            <h5 className ="cajaComponentes__productos">{item.nombre}</h5>
            <b>$ {item.precio}</b>
            <ItemCount stock = {10} />
        </div>
    )
}
