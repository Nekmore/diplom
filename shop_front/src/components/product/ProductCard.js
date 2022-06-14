import '../../styles/category.css'
import {Link} from 'react-router-dom';

export default function ProductCard(props) {
    const {
        id,
        name,
        image,
        price,
    } = props;
    const item = {id: id, name: name, image: image, price: price}
    return (
        <Link to={'/product/' + id}>
        <div id={"product-" + id} className="card">
            <div className="card_image">
                <img className="activator" src={"/images/" + image} alt="/" />
            </div>
            <div className="card_content">
                <span className="card_name">
                    {name}
                </span>
                <p>{price} р.</p>
            </div>
        </div><br/>
        </Link>
    );
}