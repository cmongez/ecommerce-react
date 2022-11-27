import { useEffect } from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ product }) => {
  const { id, title, pictureUrl, description, price } = product;

  useEffect(() => {
    // console.log(id);
  }, [id]);

  return (
    <div className='products'>
      {/* {console.log('item', title, pictureUrl, description, price)} */}
      <h1>{title}</h1>

      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={pictureUrl} height='400' alt='' />
        </div>
        <p>{description}</p>
        <p style={{ color: 'green' }}>Precio: ${price}</p>
      </div>

      <ItemCount stock={6} product={product} />
    </div>
  );
};
