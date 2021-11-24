export const ItemDetail = ({name,precio,img,desc}) =>{
    return (
        <div>
            <img src={img} width="300px"/>
            <h1>{name}</h1>
            <b>${precio}</b>
            <p>{desc}</p>
        </div>
    )

}
