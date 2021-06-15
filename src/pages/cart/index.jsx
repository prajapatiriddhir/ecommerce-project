import { Typography } from "@material-ui/core";
import { Box, Container, Grid, Button } from "@material-ui/core";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Header } from "../../components";
import { CartButton } from "../../components/cart-button";
import { clearCartAction } from "../../store/action/cart";
import { selectCart } from "../../store/selector/cart";

export default function CartPage() {
  const cart = useSelector(selectCart);
  const history = useHistory();
  const dispatch = useDispatch();
  const totalSum = useMemo(
    () => cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0),
    [cart]
  );

  const handleCheckout = () => {
    dispatch(clearCartAction());
    history.push("/order-success");
  };

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
      flex={1}
      flexDirection="column"
    >
      <Header />
      {cart.length ? (
        <Container style={{ padding: 12 }}>
          <Grid container spacing={4}>
            <Grid item md={8}>
              {cart.map((item) => (
                <Box
                  paddingY={2}
                  display="flex"
                  alignItems="center"
                  key={item.id}
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <img
                      src={`/images/${item.image}`}
                      height={150}
                      width={150}
                      style={{ objectFit: "contain" }}
                    />
                    <Box>
                      <Typography
                        style={{ textTransform: "capitalize" }}
                        variant="h6"
                      >
                        {item.name}
                      </Typography>
                      <Typography style={{ textTransform: "capitalize" }}>
                        {item.qty} X ${item.price}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="flex-end"
                    flexDirection="column"
                  >
                    <Typography
                      style={{ textTransform: "capitalize" }}
                      variant="h6"
                    >
                      ${item.qty * item.price}
                    </Typography>
                    <CartButton qty={item.qty} product={item} />
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid item md={4}>
              <Typography variant="h5">Summary</Typography>

              <Typography style={{ marginTop: 12 }}>
                Total Price : ${totalSum}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                style={{ marginTop: 12 }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography style={{ marginBottom: 8 }} variant="h5">
            Cart Empty
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Go To Home
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
