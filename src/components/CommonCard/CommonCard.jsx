import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useGlobalContext from "../../store/hooks/useGlobalContext";

export default function CommonCard({ cartItem }) {
  const { increaseCart, increaseWishList } = useGlobalContext();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cartItem.productImage}
        title={cartItem.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cartItem.productName}:
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cartItem.productDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={increaseCart}
        >
          Add To Cart
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<FavoriteBorderIcon />}
          onClick={increaseWishList}
        >
          Add To Wishlist
        </Button>
      </CardActions>
    </Card>
  );
}
