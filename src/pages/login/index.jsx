import { Button } from "@material-ui/core";
import { Box, Typography, TextField, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AuthService from "../../services/auth";
import { updateUserAction } from "../../store/action/auth";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column"
  },
  textField: {
    marginBottom: theme.spacing(3),
    width: 400
  },
  loginLabel: {
    marginBottom: theme.spacing(3)
  }
}));

export default function LoginPage() {
  const classes = useStyle();
  const history = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await AuthService.login(form.email, form.password);
      dispatch(updateUserAction(response));
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
      alignItems="center"
      justifyItems="center"
    >
      <form className={classes.form} onSubmit={handleLogin}>
        <Typography variant="h4" className={classes.loginLabel}>
          Login
        </Typography>

        <TextField
          placeholder="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={form.email}
          variant="outlined"
          className={classes.textField}
        />
        
        <TextField
          placeholder="Password"
          type="password"
          required
          name="password"
          value={form.password}
          onChange={handleChange}
          variant="outlined"
          className={classes.textField}
        />

        {!!error && <Typography color="error">{error}</Typography>}

        <Button
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
