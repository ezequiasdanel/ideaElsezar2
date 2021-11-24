import './index.css'
import { useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { productos } from '../../data/Productos/Productos';
import { useState } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const getItems = new Promise ((resolve) => {
            setTimeout (() =>{
                resolve(productos[0]);
            },1000);
        });
        getItems.then ((resolve) =>{
            setItems(resolve);
        });
    }, []);
    return (
    <div className="cajaComponentes">
    <ItemList items={items}/> 
    </div>
    )}

    