import { Layout } from '../components/Layout';
import { ItemListContainer } from '../components/ItemListContainer';
export const Home = () => {
  return (
    <Layout>
      <ItemListContainer greeting='Bienvenidos' />
    </Layout>
  );
};
