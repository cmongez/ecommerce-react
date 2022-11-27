import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { ItemCount } from './ItemCount';
import { useNavigate } from 'react-router-dom';
import './ItemList.css';
export const Item = ({ product }) => {
  const { title, description, price, pictureUrl, id } = product;
  const navigate = useNavigate();

  return (
    <Card className='card'>
      <CardActionArea onClick={() => navigate(`/product/${id}`)}>
        <CardMedia component='img' height='250' image={pictureUrl} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount
          stock={6}
          product={product}
          onAdd={() => console.log('onAdd')}
        />
      </CardActions>
    </Card>
  );
};
