import { AppBar, IconButton, Toolbar } from '@mui/material';
import { CartWidget } from './CartWidget';
import './Navbar.css';

const categories = ['Mujeres', 'Hombres', 'Niños'];
const categoryList = categories.map((category) => {
  return (
    <li key={category} className='nav__list__item'>
      {category}
    </li>
  );
});

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar className='nav'>
        <IconButton size='large' color='inherit'>
          Mongez
        </IconButton>
        <ul className='nav__list'>{categoryList}</ul>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};
