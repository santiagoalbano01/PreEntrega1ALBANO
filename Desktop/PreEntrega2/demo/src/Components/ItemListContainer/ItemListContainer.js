import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {

    const [item, setItem] = useState([])
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? arrayProductos.filter(item => item.marca === id) : arrayProductos);
                    }, 1500);
                });
                setItem(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <div className='container'>
            <div className='row'>


                <ItemList item={item}/>


            </div>

        </div>
    )
}

export default ItemListContainer