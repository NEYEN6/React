import {useEffect, useState} from "react";
import '../style.css';
import {ItemList} from '../ItemList/ItemList'
import {products} from '../Products/products'
import {useParams} from 'react-router-dom';

const ItemListContainer = ()=>{
  const {tipoProducto, tipoGenero} = useParams();
  console.log(tipoGenero)
  console.log(tipoProducto)
  

  const [productos, setProductos] = useState([]);

const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(products);
    }, );
})

useEffect(()=>{
    promesa.then(resultado=>{
        if(!tipoProducto && !tipoGenero){
            setProductos(resultado)
        } else{
            const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
            console.log('nuevaLista',nuevaLista)
            setProductos(nuevaLista)
        }
        
    })
},[tipoProducto])

console.log(productos)



return(
    <div className="listContainer">
        
        <ItemList items={productos}/>   
        </div>
   
   
  )
}


export default ItemListContainer;
