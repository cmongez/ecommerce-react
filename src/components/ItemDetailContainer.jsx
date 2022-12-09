import { useEffect, useState } from 'react';
import { getProduct } from '../api/products';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Layout } from './Layout';

export const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((item) => {
        console.log('x', item);
        setProduct(item);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div>
      <Layout>
        <ItemDetail {...product} />
      </Layout>
    </div>
  );
};
