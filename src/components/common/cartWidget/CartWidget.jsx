import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartIcon style={{ color: "grey" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
