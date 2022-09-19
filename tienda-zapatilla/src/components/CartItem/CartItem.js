import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


  export const CartItem = ({item}) => {
    const {deleteProduct} = useContext(CartContext);
    const loadImage = imageName => (require(`../imagenes/${imageName}`));  

    return (
        <div >
        <div className='row cart-container'>
        <div className='cart-item-container col-sm-7 col-md-7'  >       
            <div className='cart-img-container col-sm-5 col-md-2 '>
            <img src={loadImage(item.picture)} alt="img" />
            </div>
            <div className='cart-info-container'>    
                <h3>{item.nombre}</h3>
                <h6>Cantidad: {item.quantity}</h6>
                <h6>Talle: {item.talle}</h6>               
            </div>
            <div className='cart-info-price'>    
            <h5>Precio total: US${item.totalPrice}</h5>
            </div>
            <div className='cart-info-delete'>    
                <button onClick={()=>deleteProduct(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        </div>
        </div>
    </div>
    )
}