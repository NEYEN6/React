import React, { useEffect, useState } from "react";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../../utils/firebase"

export const PaginaFirebase = () => {
     const [arregloProductos, setarregloProductos] = useState([])
    
    useEffect(()=>{
        const getData = async()=>{
             const query = collection(db, "items" )   
             const response = await getDocs(query)
             const docs = response.docs 
             const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
             setarregloProductos(data)
             console.log(arregloProductos)

        }
    getData()
    },[])


return(
    <div>
        <h1>PaginaFirebase</h1>
    </div>

)
}