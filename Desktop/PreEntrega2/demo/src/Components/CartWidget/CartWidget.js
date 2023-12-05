import { BsFillCartCheckFill } from 'react-icons/bs';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="container">
      <button>
        <BsFillCartCheckFill />
      </button>
    </div>
  );
};

export default CartWidget;