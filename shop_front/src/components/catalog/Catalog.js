import {useState, useEffect} from 'react';
import {API_CATEGORY_LIST} from '../../config';
import CatalogCard from './CatalogCard'


export default function Catalog(props) {
    const [records, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?

    useEffect(() => {
        fetch(API_CATEGORY_LIST)
            .then(response => response.json())
            .then(data => {
                data.records && setItems(data.records.slice(0, 24));
                setLoading(false);
            });
    }, []);

    return (
        <div className='catalog_block'>
            <h2>Каталог</h2>
            <div className="catalog">
                {records.map(item => (
                        <CatalogCard key={item.id} {...item} />
                    ))}
            </div>
        </div>
    )
}