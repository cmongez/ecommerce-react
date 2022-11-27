import { createContext, useContext, useState } from 'react';

export const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  const addProduct = (item, quantity) => {
    if (!isInCart(item.id)) {
      return setCart([...cart, { ...item, quantity }]);
    }
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + quantity };
      }
      return product;
    });

    setCart(newCart);
  };

  const getTotal = () => {
    let num = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return num.toFixed(2);
  };

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((product) => {
      count += product.quantity;
    });

    return !count ? '' : count;
  };

  const value = {
    cart,
    addProduct,
    removeProduct,
    getCartQuantity,
    getTotal,
    clear,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
