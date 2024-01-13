import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p className='error'>No hay elementos en el carrito</p>
        <Link to="/" className='link-to'>Volver al Inicio</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <div key={product.id} className='item-cart'>
          <ItemCart product={product} />
        </div>
      ))}
      <p>Total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;
