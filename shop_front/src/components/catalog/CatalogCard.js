import '../../styles/category.css'
import {Link} from 'react-router-dom';


export default function CatalogCard(props) {
    const {
        id,
        name,
        image,
    } = props;
    const item = {id: id, name: name, image: image}
    return (
        <div id={"product-" + id} className="card">
            <Link to={'/catalog/' + id}>
                <div className="card_image">
                    <img className="activator" src={"/images/" + image} alt="/" />
                </div>
                <div className="card_content">
                    <span className="card_name">
                        {name}
                    </span>
                </div>
            </Link>
        </div>
    );
}