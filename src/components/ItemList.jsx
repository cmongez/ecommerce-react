import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../api/products';
import { Item } from './Item';
export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((items) => setProducts(items))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className='products'>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            pictureUrl={product.pictureUrl}
          />
        );
      })}
    </div>
  );
};
