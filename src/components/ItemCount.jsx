import { Button } from '@mui/material';
import { useState } from 'react';
import './ItemCount.css';
import { useCartContext } from '../context/CartContext';

export const ItemCount = ({ stock, product }) => {
  const [count, setCount] = useState(0);
  const { addProduct } = useCartContext();

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleAdd = () => {
    addProduct(product, count);
  };

  return (
    <div className='item-count'>
      <Button onClick={() => handleDecrease()}>-</Button>
      {count}
      <Button onClick={() => handleIncrease()}>+</Button>

      <Button
        variant='outlined'
        onClick={() => {
          if (count) {
            handleAdd();
          }
        }}>
        Agregar
      </Button>
    </div>
  );
};
