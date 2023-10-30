import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
};

const Cart = () => {
  return (
    <div>
      <h1>CARRITO DE COMPRAS</h1>

      <Link to="/checkout">
      <Button variant="contained" sx={buttonStyle}>
        FINALIZAR COMPRA
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
