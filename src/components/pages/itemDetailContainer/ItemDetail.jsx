import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import { CardMedia, Typography, Button, Box } from "@mui/material";

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 0,
  "&:hover": { backgroundColor: "#FBAF85" },
  textTransform: "none",
  marginBottom: 1,
  marginLeft: "20px",
  marginTop: "10px",
};

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div
      className="containerItemDetail"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="containerImage">
        <CardMedia
          component="img"
          image={productSelected.img}
          alt=""
          sx={{
            width: "420px",
            height: "530px",
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "40px",
            marginTop: "40px",
          }}
        />
      </div>

      <div
        className="containerDetail"
        style={{ fontFamily: "Verdana", fontSize: "10px" }}
      >
        <h2>
          <span style={{ marginTop: "10px", marginLeft: "20px" }}>Nombre:</span>{" "}
          {productSelected.title}
        </h2>

        <h2>
          <span style={{ marginTop: "40px", marginLeft: "20px" }}>
            Descripción:
          </span>{" "}
          {productSelected.description}
        </h2>

        <h2>
          <span style={{ marginTop: "40px", marginLeft: "20px" }}>Precio:</span>{" "}
          ${productSelected.price}.-
        </h2>
      </div>

      <div className="containerButtons">
        {initial && (
          <h5
            style={{
              fontFamily: "Verdana",
              fontSize: "12px",
              marginTop: "10px",
              marginLeft: "20px",
            }}
          >
            ya agregaste {initial} al carrito
          </h5>
        )}

        {showCounter ? (
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        ) : (
          <Link to="/cart">
            <Button variant="contained" sx={buttonStyle}>
              IR AL CARRITO
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
