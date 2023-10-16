import { Badge } from "@mui/material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const CartWidget = () => {
  return (
    <div>
    <Badge badgeContent={0} showZero color="success">
      <ShoppingCartTwoToneIcon color="action" />
    </Badge>
    </div>
  );
};

export default CartWidget;
