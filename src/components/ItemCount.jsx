import { Button } from '@mui/material';
import { useState } from 'react';

export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

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

  return (
    <>
      <div>
        <Button onClick={() => handleDecrease()}>-</Button>
        {count}
        <Button onClick={() => handleIncrease()}>+</Button>
      </div>
      <Button
        variant='outlined'
        onClick={() => {
          if (count) {
            onAdd();
          }
        }}>
        Agregar al carrit o
      </Button>
    </>
  );
};
