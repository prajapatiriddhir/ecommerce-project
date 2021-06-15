import { Box, Button, IconButton, Typography } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import { updateCartAction } from "../store/action/cart";

export function CartButton({ qty, product }) {
  const dispatch = useDispatch();

  const updateQty = (action) => {
    dispatch(updateCartAction(product, action));
  };

  if (!qty) {
    return (
      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={() => updateQty("INC")}
      >
        Add To Cart
      </Button>
    );
  }
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => updateQty("INC")}>
        <Add />
      </IconButton>
      <Typography>{qty}</Typography>
      <IconButton onClick={() => updateQty("DEC")}>
        <Remove />
      </IconButton>
    </Box>
  );
}
