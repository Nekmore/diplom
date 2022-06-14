import {useState, useEffect} from 'react';
import {API_URL_LIST} from '../../config';
import ProductCard from './ProductCard'
import { useLocation } from 'react-router-dom'

export default function Product(props) {
    const [records, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?
    // const catId = this.props.value.location.pathname;
    const location = useLocation();
    const catId = idCat(location.pathname);
    

    function idCat(location) {
        let categoryId = location.split('/');
        categoryId = categoryId.slice(-1);
        categoryId  = categoryId.toString();
        return categoryId;
    }
    

    useEffect(() => {
        fetch(API_URL_LIST)
            .then(response => response.json())
            .then(data => {
                data.records && setItems(data.records);
                setLoading(false);
            });
    }, []);

    return (
        
        <div className='catalog_block'>
            <h2>Товары</h2>
            <div className="catalog">
                {records.map(item => (
                        item.category_id == catId ? <ProductCard key={item.id} {...item} /> : ''
                        
                    ))}
                
            </div>
        </div>
    )
}