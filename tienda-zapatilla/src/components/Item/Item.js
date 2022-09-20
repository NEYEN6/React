import '../style.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
  ;  
    return(
        <div className="card">
             
            <Link to={`/item/${item.id}`}>
            <img src={item.pictureUrl} alt="img" />
             <h2>{item.nombre}</h2>
             <h4>US$ {item.precio} </h4>
            </Link>
        </div>

    )
}

