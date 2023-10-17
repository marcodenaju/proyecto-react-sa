import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div to="/cart">
      {/* <Link to="/cart"> */}
      <Badge badgeContent={0} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
      {/* </Link> */}
    </div>
  );
};

export default CartWidget;
