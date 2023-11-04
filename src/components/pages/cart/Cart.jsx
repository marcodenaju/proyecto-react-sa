import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
};

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div>
      <h1>CARRITO DE COMPRAS</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h4> {product.title}</h4>
          <h4>cantidad: {product.quantity}</h4>
        </div>
      ))}

      <Link to="/checkout">
        <Button variant="contained" sx={buttonStyle}>
          FINALIZAR COMPRA
        </Button>
      </Link>

      <Button variant="contained" onClick={clearCart} sx={buttonStyle}>
        VACIAR CARRITO
      </Button>
    </div>
  );
};

export default Cart;
