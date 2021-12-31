import { Item } from "../Item/Item";

export const ItemList = ({items}) => {
    return (
        <div className="cajaComponentes">
            {items?.map ((item)=> (
                <Item item ={item} key={item.id}/>  
            ))}
        </div>
    );
};