import {useState, useEffect} from 'react';
import {API_URL_LIST} from '../../config';
import ProductCard from './ProductCard'
import { useLocation } from 'react-router-dom'

export default function Product(props) {
    const [records, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?
    // const catId = this.props.value.location.pathname;
    const location = useLocation();
    const catId = location.pathname.slice(-1);

    useEffect(() => {
        fetch(API_URL_LIST)
            .then(response => response.json())
            .then(data => {
                data.records && setItems(data.records.slice(0, 24));
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