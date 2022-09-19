import { useState, useEffect } from "react";
import '../style.css';
import {products} from "../Products/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";


const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const producto = products.find(item=>item.id === parseInt(id));
            resolve(producto)

        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto);
            
        }
        getProducto();
    },[productId])


    console.log('item:', item)



    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer