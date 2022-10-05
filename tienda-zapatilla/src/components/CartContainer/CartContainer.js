import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import {db} from '../../utils/firebase'
import {collection, addDoc} from 'firebase/firestore'

export const CartContainer = () => {
  const {productCartList, clearProductsCartList, getTotalPrice} = useContext(CartContext);

const [idOrder, setidOrder] = useState ("")

const sendOrder = (e)=>{
  e.preventDefault()
  const order = {
    buyer:{
      name:e.target[0].value,
      phone: e.target[1].value,
      email:e.target[2].value
    },
    items: productCartList,
    total: getTotalPrice()
    
}
  const queryRef = collection(db,"orders")
  addDoc(queryRef, order).then(respuesta=>setidOrder(respuesta.id))
  console.log(order)
}
  return (
<div className='productCartList'> 
<br/>
<h1>Mi Carrito</h1>
      <div>
        {
          productCartList.length>0 ?
          <>
          
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
                
              ))
              
            }
            <hr/>
            <h5>Precio Total: US${getTotalPrice()}</h5>
            <button onClick={clearProductsCartList} className="vaciarCarrito">Vaciar el carrito</button>
            <hr/>
            <form onSubmit={sendOrder} className="form-register">
            <h4>Orden De Compra</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Telefono"/>
            <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
              <button type='submit' className='botons'>Enviar Orden</button>
            </form>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
      
    </div>
  )
}