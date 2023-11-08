import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
};

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro desea limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se eliminó el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se conservó el carrito", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>CARRITO DE COMPRAS</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h4> {product.title}</h4>
          <h4>{product.price}</h4>
          <h4>cantidad: {product.quantity}</h4>
          <IconButton onClick={()=>deleteProductById(product.id)}>

          <DeleteIcon color="secondary" />
          </IconButton>
         
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h5>El total a pagar es de: {total}</h5>

          <Link to="/checkout">
            <Button variant="contained" sx={buttonStyle}>
              FINALIZAR COMPRA
            </Button>
          </Link>

          <Button
            variant="contained"
            onClick={clearCartWithAlert}
            sx={buttonStyle}
          >
            VACIAR CARRITO
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
