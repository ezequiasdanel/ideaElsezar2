import { Link } from "react-router-dom";

const FilterProducts = () => {
    const categorias = [
        {id:'001',directory:'/Productos',text:'Todos Los Productos'},
        {id:'002',directory:'/Procesadores',text:'Procesadores'},
        {id:'003',directory:'/Placas De Video',text:'Placas De Video'},
        {id:'004',directory:'/Placas Madre',text:'Placas Madre'},
        {id:'005',directory:'/Memorias Ram',text:'Memorias Ram'},
    ];


    return(
        <section>
            {categorias.map((cat) => {
                return (
                    <div key={cat.id}>
                        <Link>{cat.text}</Link>
                    </div>
                )
            })}
        </section>
    )
}