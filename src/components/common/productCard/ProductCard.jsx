import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ marginTop: "60px", maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            // size="small"
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 0,
              "&:hover": { backgroundColor: "#FBAF85" },
              textTransform: "none",
            }}
          >
            VER DETALLE
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
