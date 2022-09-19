import React, { useEffect } from "react";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../../utils/firebase"

export const PaginaFirebase = () => {

    
    useEffect(()=>{
        const getData = async()=>{
             const query = collection(db, "items")   
             const response = getDocs(query)
             const docs = response.docs 
             console.log("docs", docs);
        }
    getData()
    },[])


return(
    <div>
        <h1>PaginaFirebase</h1>
    </div>

)
}