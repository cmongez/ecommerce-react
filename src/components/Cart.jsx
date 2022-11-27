import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCartContext } from '../context/CartContext';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { getTotal, cart, removeProduct } = useCartContext();
  console.log(cart);

  if (cart.length > 0) {
    return (
      <Layout>
        <div>
          <Link to='/'> Volver al home</Link>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align='right'>Precio</TableCell>
                <TableCell align='right'>Cant</TableCell>
                <TableCell align='right'>Subtotal</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.title}
                  </TableCell>
                  <TableCell align='right'>{row.price}</TableCell>
                  <TableCell align='right'>{row.quantity}</TableCell>
                  <TableCell align='right'>
                    {row.quantity * row.price}
                  </TableCell>
                  <TableCell align='right'>
                    <span onClick={() => removeProduct(row.id)}>X</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>Total a pagar: {getTotal()}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <Link> Volver al home</Link>
      </div>

      <p>No hay items</p>
    </Layout>
  );
};
