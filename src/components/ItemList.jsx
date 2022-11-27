import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';
import { Item } from './Item';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import './ItemList.css';
export const ItemList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category)
      .then((items) => {
        setProducts(items);
      })
      .catch((e) => console.log(e));
  }, [category]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        return (
          <Grid
            className='card'
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <Item product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};
