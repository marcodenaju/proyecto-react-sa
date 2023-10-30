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
    <div>
      <Button variant="contained" sx={buttonStyle} onClick={sumar}>
        SUMAR
      </Button>
      <h4>{contador}</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" sx={buttonStyle} onClick={restar}>
          RESTAR
        </Button>
        <Button
          variant="contained"
          sx={addToCartButtonStyle}
          onClick={() => onAdd(contador)}
        >
          AGREGAR AL CARRITO
        </Button>
      </div>
    </div>
  );
};

export default Counter;
