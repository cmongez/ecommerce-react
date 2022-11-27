import { AppBar, IconButton, Toolbar } from '@mui/material';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCartContext } from '../context/CartContext';

const categories = ['Mujer', 'Hombre', 'Tecnologia'];
const categoryList = categories.map((elem) => {
  return (
    <Link
      className='nav__list__item'
      key={elem}
      to={`/category/${elem.toLowerCase()}`}>
      {elem}
    </Link>
  );
});

export const Navbar = () => {
  const { cart, getCartQuantity } = useCartContext();
  console.log({ cart });
  return (
    <AppBar position='static'>
      <Toolbar className='nav'>
        <Link className='logo' to='/'>
          <IconButton size='large' color='inherit'>
            Mongez
          </IconButton>
        </Link>
        <div className='nav__list'>{categoryList}</div>
        <Link to='/cart'>
          <div>
            <span>{getCartQuantity()}</span>
            <CartWidget />
          </div>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
