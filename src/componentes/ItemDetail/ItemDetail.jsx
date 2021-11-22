export const ItemDetail = ({name,precio,img,desc}) =>{
    return (
        <div>
            <img src={img} width="150px"/>
            <h1>{name}</h1>
            <b>{precio}</b>
            <p>{desc}</p>
        </div>
    )

}
