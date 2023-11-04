import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArr = cart.map((elemento) => {
        // []
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getQuantityById, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;