import { AppBar, IconButton, Toolbar } from '@mui/material';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
  return (
    <AppBar position='static'>
      <Toolbar className='nav'>
        <Link className='logo' to='/'>
          <IconButton size='large' color='inherit'>
            Mongez
          </IconButton>
        </Link>
        <div className='nav__list'>{categoryList}</div>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};
