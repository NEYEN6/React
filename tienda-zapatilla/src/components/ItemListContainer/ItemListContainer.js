import { useEffect, useState } from "react";
import '../style.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const ItemListContainer = ()=>{
    const {categoria} = useParams();

    const [productos, setProductos] = useState([]);

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryRef = ""
                if(!categoria){
                    queryRef = collection(db, "items")
                }else{
                     queryRef = query(collection(db, "items"),where("categoria", "==", categoria))
                }
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                        
                    }
                    return newDoc;
                });
                console.log("productos", productos)
                setProductos(datos)           
            } catch (error) {
                console.log(error);
            }
        }
        getData();
        // promesa.then(resultado=>{
        //     if(!categoria){
        //         setProductos(resultado)
        //     } else{
        //         const nuevaLista = resultado.filter(item=>item.categoria === categoria);
        //         setProductos(nuevaLista)
        //     }
        // })
    },[categoria])

    return(
        <div className="listContainer">
            
            <ItemList items={productos}/>
        </div>
    )
}
export default ItemListContainer;