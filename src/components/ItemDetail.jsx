import { useEffect } from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({
  id,
  title,
  pictureUrl,
  description,
  price,
  stock,
}) => {
  const product = { id, title, pictureUrl, description, price, stock };
  useEffect(() => {}, [id]);

  if (id !== null) {
    return (
      <div className='products'>
        <h1>{title}</h1>

        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={pictureUrl} height='400' alt='' />
          </div>
          <p>{description}</p>
          <p style={{ color: 'blue' }}>Quedan {stock} unidades disponibles</p>
          <p style={{ color: 'green' }}>Precio: ${price}</p>
        </div>

        <ItemCount product={product} />
      </div>
    );
  }
  return <div>cesar</div>;
};
