import {useState, useEffect} from 'react';
import {API_URL_LIST} from '../../config';
import ProductOneCard from './ProductOneCard'
import { useLocation } from 'react-router-dom'

export default function ProductOne(props) {
    const [records, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?
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
            <div className="catalog">
                {records.map(item => (
                    item. id == catId ? <ProductOneCard key={item.id} {...item} /> : ''
                    ))}
            </div>
        </div>
    )
}