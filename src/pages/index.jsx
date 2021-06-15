import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./login";
import HomePage from "./home";
import CartPage from "./cart";
import OrderSuccess from "./order-success";
import { useSelector } from "react-redux";
import { selectUser } from "../store/selector/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  const render = (props) => {
    if (!user) {
      let redirectUrl = "/login";
      if (props.location.pathname !== "/" || props.location.search !== "") {
        redirectUrl +=
          "?redirect=" +
          encodeURIComponent(props.location.pathname + props.location.search);
      }
      return <Redirect to={redirectUrl} />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <PrivateRoute exact path="/order-success" component={OrderSuccess} />
      </Switch>
    </BrowserRouter>
  );
}
