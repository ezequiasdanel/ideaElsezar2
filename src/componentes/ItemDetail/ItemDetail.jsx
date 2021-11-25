export const ItemDetail = ({id,nombre,precio,img,desc}) =>{
    return (
        <div key={id}>
            <img src={img} width="300px"/>
            <h1>{nombre}</h1>
            <b>Precio : ${precio}</b>
            <p>{desc}</p>
        </div>
    )

}
