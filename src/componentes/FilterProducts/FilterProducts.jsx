import { NavLink, Link } from "react-router-dom";

export const FilterProducts = () => {
    const categorias = [
        {id:'001',directory:'/productos',text:'Todos Los Productos'},
        {id:'002',directory:'/procesador',text:'Procesadores'},
        {id:'003',directory:'/placasdevideo',text:'Placas De Video'},
        {id:'004',directory:'/placasmadre',text:'Placas Madre'},
        {id:'005',directory:'/memoriasram',text:'Memorias Ram'},
    ];


    return(
        <section>
            {categorias.map((cat) => {
                return (
                    <div key={cat.id}>
                        <Link to={cat.directory}>{cat.text}</Link>
                    </div>
                )
            })}
        </section>
    )
}