const products = [
  {
    id: 1,
    title: 'Camiseta hombre',
    description: 'Descripcion de producto',
    price: 200,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    category: 'hombre',
  },
  {
    id: 2,
    title: 'Camiseta mujer',
    description: 'Descripcion de producto',
    price: 300,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    category: 'mujer',
  },
  {
    id: 3,
    title: 'Pantalon niño',
    description: 'Descripcion de producto',
    price: 400,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    category: 'nino',
  },
  {
    id: 1,
    title: 'Camiseta new balance',
    description: 'Descripcion de producto',
    price: 200,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    category: '',
  },
  {
    id: 2,
    title: 'Camiseta nike',
    description: 'Descripcion de producto',
    price: 300,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    category: 'mujer',
  },
  {
    id: 3,
    title: 'Pantalon devil',
    description: 'Descripcion de producto',
    price: 400,
    pictureUrl: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    category: 'hombre',
  },
];

export const getProducts = (category) =>
  new Promise((res, rej) => {
    const response = category
      ? products.filter((p) => p.category === category)
      : products;
    setTimeout(() => {
      res(response);
    }, 1500);
  });

export const getProduct = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(products[0]), 2000);
  });
