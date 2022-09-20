import React from "react";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({items}) =>{
      
     return( 
        
                <div className="cardsContainer">
    
           {
            items.map((mostrarProductos)=>{
              return(           
                
                
                <Item item={mostrarProductos}/>
              )
            })
          }          
             
        </div>
        )
   
}

