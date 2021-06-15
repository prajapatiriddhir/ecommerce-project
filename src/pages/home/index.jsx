import { Typography } from "@material-ui/core";
import { Box, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

import ProductService from "../../services/product";
import { Header } from "../../components";
import { CartButton } from "../../components/cart-button";
import { useSelector } from "react-redux";
import { selectCartMapping } from "../../store/selector/cart";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const cart = useSelector(selectCartMapping);

  useEffect(() => {
    (async () => {
      setProducts(await ProductService.fetchProducts());
    })();
  }, []);

  return (
    <Box minHeight="100vh" minWidth="100vw">
      <Header />
      <Container>
        <Grid container spacing={3}>
          {products.map((p) => (
            <Grid item xs={12} md={3} key={p.id}>
              <img
                src={`/images/${p.image}`}
                height={300}
                width="100%"
                alt="Product"
              />
              <Typography
                style={{ textTransform: "capitalize" }}
                color="textSecondary"
                variant="h6"
              >
                {p.name}
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  style={{ textTransform: "capitalize" }}
                  color="textSecondary"
                  variant="body1"
                >
                  ${p.price}
                </Typography>

                <CartButton qty={cart[p.id]?.qty || 0} product={p} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
