import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Iphone from './Components/Iphone';
import Samsung from './Components/Samsung';
import Motorola from './Components/Motorola';
import Error from './Components/Error';
import CartWidget from './Components/CartWidget/CartWidget';


  function App() {
    return (
      <div className="App">
        <BrowserRouter>

          <NavBar />
          
          <Routes>


            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Mundo Phone.' />} />
            <Route path='/iphone' element={<Iphone/>} />
            <Route path='/motorola' element={<Motorola/>} />
            <Route path='/samsung' element={<Samsung />} />
            <Route path='/cart' element={<CartWidget />} />
            <Route path='*' element={<Error />} />

          </Routes>

        </BrowserRouter>
      </div>
    );
  }

export default App;
