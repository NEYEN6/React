import '../style.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    const loadImage = imageName => (require(`../imagenes/${imageName}`));  
    return(
        <div className="card">
            <Link to={`/item/${item.id}`}>
            <img src={loadImage(item.picture)} alt="img" />
             <h2>{item.nombre}</h2>
             <h4>US$ {item.precio} </h4>
            </Link>
        </div>
    )
}

