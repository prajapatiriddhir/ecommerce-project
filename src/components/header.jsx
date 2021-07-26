import {AppBar,Badge,IconButton,Toolbar,Typography,Button,Box} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../store/action/auth";
import { selectCartCount } from "../store/selector/cart";

export function Header() {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutAction());
    history.push("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          to="/"
          style={{ color: "white ", textDecoration: "none", flex: 1 }}
        >
          <Typography variant="h6" noWrap>
            Ecommerce Web App
          </Typography>
        </Link>

        <Box display="flex" alignItems="center">
          <Link to="/cart" style={{ color: "white" }}>
            <IconButton color="inherit">
              <Badge badgeContent={cartCount || 0} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
          <Button
            variant="contained"
            disableElevation
            onClick={handleLogout}
            style={{ marginLeft: 8 }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
