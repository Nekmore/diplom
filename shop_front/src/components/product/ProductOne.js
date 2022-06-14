import {useState, useEffect} from 'react';
import {API_URL_LIST} from '../../config';
import ProductOneCard from './ProductOneCard'
import { useLocation } from 'react-router-dom'

export default function ProductOne(props) {
    const [records, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?
    const location = useLocation();
    const catId = idCat(location.pathname);

    function idCat(location) {
        let categoryId = location.split('/');
        categoryId = categoryId.slice(-1);
        categoryId  = categoryId.toString();
        console.log(categoryId);
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
            <div className="catalog">
                {records.map(item => (
                    item. id == catId ? <ProductOneCard key={item.id} {...item} /> : ''
                    ))}
            </div>
        </div>
    )
}