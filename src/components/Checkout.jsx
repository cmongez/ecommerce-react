import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Layout } from './Layout';
import { getOrder } from '../api/orders';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Checkout = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getOrder(id).then((id) => {
      console.log(id);
      setOrder(id);
    });
  }, []);

  if (order === null) {
    return (
      <Layout>
        <div>cargando</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <h2>Orden {order.id}</h2>
      <div>
        <h3>Datos de su compra</h3>
        <ul>
          <li>
            <b>Nombre:</b> {order.buyer.name}
          </li>
          <li>
            <b>Email: </b>
            {order.buyer.email}
          </li>
          <li>
            <b>Telefono: </b>
            {order.buyer.phone}
          </li>
        </ul>
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
            {order.items.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.title}
                </TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
                <TableCell align='right'>{row.quantity * row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <b>Total:</b>
        {order.total}
      </div>
    </Layout>
  );
};
