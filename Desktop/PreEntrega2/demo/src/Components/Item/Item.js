import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id}>
            <div className='item-container'>
                <div>
                    <img src={item.imagen} className='item-image' alt={item.modelo} />
                    <div className='card-body text-center'>
                        <p children='card-text color-text-black'>{item.modelo}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item