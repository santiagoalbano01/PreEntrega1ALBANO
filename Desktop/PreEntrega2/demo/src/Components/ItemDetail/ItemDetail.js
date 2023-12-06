import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md-4 iifset-md-4'>
        <img src={item.imagen} className='card-img-top' alt={item.nombre} />
        <h3>{item.modelo}</h3>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
      </div>
      
    </div>
  )
}

export default ItemDetail