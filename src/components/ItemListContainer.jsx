import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 style={{ color: 'red' }}>{greeting}</h2>
      <ItemCount stock={6} onAdd={() => console.log('onAdd')} />
      <ItemList />
    </>
  );
};
