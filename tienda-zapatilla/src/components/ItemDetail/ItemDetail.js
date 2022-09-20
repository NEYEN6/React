import '../style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {ItemCount} from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';


export const ItemDetail = ({item})=>{
   
    const {addProduct} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);
    const loadImage = imageName => (require(`../imagenes/${imageName}`));

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }
   
    return(
        <div> 
        <div className="row containerArticulo">
          <div className="col-sm-12 col-md-12 col-lg-6 description-and-detail contenedorImg"> 
          <img src={item.pictureUrl} alt="img" />
          </div>  
          <div className="col-sm-12 col-md-12 col-lg-6 description-and-detail contenedorDatos">
            <h1>{item.nombre}</h1>
            <h5>{item.categoria}</h5>
            <h2>{item.envio} </h2>
            <h4>US${item.precio} </h4>
            <a href="" className="promociones"><h3><FontAwesomeIcon icon={faCreditCard}/> {item.promociones} </h3></a>
            <h6>Talle <br/><li className="talles">{item.talle}</li></h6>  
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
          </div>       
        </div>
    
        <div className="contenedorDetalles">
          <div className="contenedorDescripcion">      
          </div>
          <div class="row">
                <div className="col-12 description-and-detail">
          <div class="row description ">
          <div class="col-sm-12 col-md-4 col-lg-3">
                <h2 class="title d-none d-sm-block">Descripci&oacute;n</h2>
          </div>    
        <div class="col-sm-12 col-md-8 col-lg-9 value content" id="collapsible-description-1">
            <p>
                {item.descripcion}
            </p>
        </div>
        </div>
    
    
        <div class="row product-attributes">   
             <div class="offset-lg-3 offset-md-4 col-sm-12 col-md-8 col-lg-9 value content" id="collapsible-attributes-1">
                    <ul className="row detalles">     
                        <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    G&eacute;nero: {item.Género}           
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Adecuado para: {item.Adecuadopara}    
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Material:{item.Material}                  
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                   Beneficios:{item.Beneficios}
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Composici&oacute;n: {item.Composicion}
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Ca&ntilde;a: {item.Caña}
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Ajuste: {item.Ajuste}  
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Tecnolog&iacute;a: {item.Tecnología}
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Importante: {item.Importante} 
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Garant&iacute;a:{item.Garantía}
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Origen: {item.Origen}    
                                </p>
                            </li>
                        
                            <li class="col-12 col-md-6 attribute-values">
                                <p>
                                    Marca: {item.Marca}       
                                </p>
                            </li>                      
                    </ul>    
        </div>
        </div>
    </div> 
</div>
</div>
</div>
    )
}


