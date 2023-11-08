import { Padding } from "@mui/icons-material";
import Button from "@mui/material/Button";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
};

const addToCartButtonStyle = {
  ...buttonStyle,
  marginLeft: "20px",
};

const Counter = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button variant="contained" sx={buttonStyle} onClick={sumar}>
        +
      </Button>
      <h4>{contador}</h4>
      <Button variant="contained" sx={buttonStyle} onClick={restar}>
        -
      </Button>
      <Button
        variant="contained"
        sx={addToCartButtonStyle}
        onClick={() => onAdd(contador)}
      >
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};


export default Counter;
