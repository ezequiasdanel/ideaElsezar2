import './index.css'
import { useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { productos } from '../../data/Productos/Productos';
import { useState } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import { db } from '../../index';
import { collection, query,where, getDocs} from 'firebase/firestore';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {catId} = useParams();
    const [loader,setLoader] = useState(true);


    

    useEffect(() => {
        setLoader(true);
        const getItems = catId
    ? query (collection(db,'Productos'), where('tipo', '==', catId)): collection(db,'Productos')
        getDocs(getItems)
        .then((res) => {
            const results = res.docs.map((doc)=>{
                return {...doc.data(), id: doc.id}
            })
            setItems(results)
            console.log(results)
    })

    //     .then ((res) =>{
    // catId ? query() setItems(res.docs.filter((doc) => doc.tipo === catId))
    // : setItems(res);
    // getDocs(getItems)})

    .finally(()=>{
        setLoader(false);
    })
    },[catId])
    //     const getItems = new Promise ((resolve) => {
    //         setTimeout (() =>{
    //             resolve(productos);
    //         },1000);
    //     });
    //     getItems.then ((resolve) =>{
    //         catId ? setItems(resolve.filter((item) => item.tipo === catId))
    //         : setItems(resolve);
    //     })
    //     .finally(()=>{
    //         setLoader(false);
    //     })
    // }, [catId]);

    return loader ? (
        <h1>CARGANDO PRODUCTOS....</h1>) : (
    <div className="cajaComponentes">
    <ItemList items={items}/> 
    </div>
    )}

    