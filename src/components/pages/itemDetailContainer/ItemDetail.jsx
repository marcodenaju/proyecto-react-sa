import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import { CardMedia, Typography, Button, Box } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: "black", marginTop: "40px" }}
        >
          {productSelected.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={productSelected.img}
            alt=""
            sx={{
              maxWidth: "340px",
              maxHeight: "350px",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
          <h5>ya agregaste {initial} al carrito</h5>

          {showCounter ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CounterContainer
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={initial}
              />
            </div>
          ) : (
            <Link to="/cart">Terminar compra</Link>
          )}
        </Box>
      </div>
    </div>
  );
};
