import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id}>
            <div className='item-container'>
                <div>
                    <img src={item.image} className='item-image' alt={item.title} />
                    <div className='card-body text-center'>
                        <p children='card-text color-text-black'>{item.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item