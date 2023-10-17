import CounterContainer from "../../common/counter/CounterContainer"
import { CardMedia, Typography, Button, Box } from "@mui/material";


export const ItemDetail = ( {productSelected, onAdd} ) => {
  return (
    <div>
      <Typography variant="h4" component="div" sx={{ color: "black", marginTop: "40px" }}>
        {productSelected.title}
      </Typography>
            <CardMedia
            component="img"
            image={productSelected.img}
            alt=""
            sx={{ maxWidth: "350px", maxHeight: "350px" }}
            />
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  )
}