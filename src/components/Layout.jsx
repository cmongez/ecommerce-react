import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Container } from '@mui/material';
export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ minHeight: '100vh' }}>{children}</Container>
      <Footer />
    </div>
  );
};
