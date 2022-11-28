import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:category' element={<Category />} />
            <Route
              path='/product/:productId'
              element={<ItemDetailContainer />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
