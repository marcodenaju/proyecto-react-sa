import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="success">
        <ShoppingCartIcon style={{ color: "grey" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
