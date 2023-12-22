import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'firebase/firestore';
import '../src/Components/Firebase/config';
import {CheckOut} from './Components/Checkout/CheckOut';

import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import LoaderComponent from './Components/LoaderComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoaderComponent />
        <CartProvider>

          <NavBar />

          <Routes>


            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<Error />} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
