import { ItemList } from './ItemList';
export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 style={{ color: 'red' }}>{greeting}</h2>

      <ItemList />
    </>
  );
};
