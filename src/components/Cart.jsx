import * as React from 'react';
import { Button } from '@mui/material';
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
import { useState } from 'react';
import { addOrder } from '../api/orders';

export const Cart = () => {
  const { getTotal, cart, removeProduct, clear } = useCartContext();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const createOrder = () => {
    const items = cart.map(({ id, title, quantity, price }) => ({
      id,
      title,
      quantity,
      price,
    }));
    const order = {
      buyer: { name: 'Cesar', phone: '+5691234567', email: 'user2@gmail.com' },
      items: items,
      total: getTotal(),
    };
    addOrder(order).then(clear());
  };

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

        <div style={{ display: 'grid', gap: 10 }}>
          <span>Nombre</span>
          <input
            style={{ border: '1px solid black', height: 40 }}
            onChange={(e) => setName(e.target.value)}
          />
          <span>Telefono</span>
          <input
            style={{ border: '1px solid black', height: 40 }}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span>Email</span>
          <input
            required
            style={{ border: '1px solid black', marginBottom: 15, height: 40 }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Total a pagar: {getTotal()}</span>
          <Button variant='contained' onClick={() => createOrder()}>
            Pagar
          </Button>
          <Button variant='contained' onClick={() => clear()}>
            Vaciar
          </Button>
        </div>
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
