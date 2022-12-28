import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Container } from '@mui/material';
export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container style={{ minHeight: '100vh' }}>{children}</Container>
      <Footer />
    </div>
  );
};
