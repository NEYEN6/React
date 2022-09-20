import { useState, useEffect } from "react";
import '../style.css';
import {products} from "../Products/products";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";


const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

//    const getItem = (id)=>{
//        return new Promise((resolve, reject)=>{
//            const producto = products.find(item=>item.id === parseInt(id));
//            resolve(producto)
//
 //       })
//    }

    useEffect(()=>{
        const queryRef = doc(db,"items",productId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
    },[productId])
    console.log('item:', item)



    return(
        <div className="item-detail-container">
             
            <ItemDetail item={item}/>
           
            
        </div>
    )
}

export default ItemDetailContainer