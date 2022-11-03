const products = [
  {
    id: 1,
    title: 'Camiseta',
    description: 'Descripcion de producto',
    price: 200,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 2,
    title: 'Camiseta 2',
    description: 'Descripcion de producto',
    price: 300,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  },
  {
    id: 3,
    title: 'Pantalon',
    description: 'Descripcion de producto',
    price: 400,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
];

export const getProducts = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(products), 2000);
  });

export const getProduct = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(products[0]), 2000);
  });
