import { Typography, Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Header } from "../../components";

export default function OrderSuccessPage() {
  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
      flex={1}
      flexDirection="column"
    >
      <Header />

      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography style={{ marginBottom: 8 }} variant="h5">
          Order Success
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Go To Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
