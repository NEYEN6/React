import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../style.css';
import setnumeroProducto from '../../App'
import { useContext } from 'react';




function CartWidget() {
        return(
                
         <div className='cartIcon'> 
            <a href="#" class><FontAwesomeIcon icon={faCartShopping}/>{setnumeroProducto}</a> 
        </div>
        )
}
export default CartWidget;