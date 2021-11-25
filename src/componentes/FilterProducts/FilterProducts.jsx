import { NavLink, Link } from "react-router-dom";
import './index.css'
export const FilterProducts = () => {
    const categorias = [
        {id:'001',directory:'/productos',text:'Todos Los Productos'},
        {id:'002',directory:'/Productos/procesador',text:'Procesadores'},
        {id:'003',directory:'/Productos/placasdevideo',text:'Placas De Video'},
        {id:'004',directory:'/Productos/motherboard',text:'Placas Madre'},
        {id:'005',directory:'/Productos/memoriasram',text:'Memorias Ram'},
    ];


    return(
        <section className="filterCategory">
            {categorias.map((cat) => {
                return (
                    <div key={cat.id} >
                        <Link to={cat.directory} className="filters">{cat.text}</Link>
                    </div>
                )
            })}
        </section>
    )
}