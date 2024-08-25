import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux";
import { login } from "../../redux/action/authAction";
import { AuthDispatch } from "../../redux/types/AuthDispatch";

export const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AuthDispatch>();

  // auth - login - api - data - acccess
  const userData = useSelector((state: RootState) => state.auth.login.api.data);

  useEffect(() => {
    console.log("inside use effect", userData?.accessToken);
    if (userData?.accessToken !== undefined) {
      navigate("/");
    }
  }, [userData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();

    dispatch(login({ email: email, password: password }));
  };

  const handleSignUpClick = () => navigate("/auth/signup");

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ color: (theme) => theme.app.text }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            variant="filled"
            InputLabelProps={{
              sx: {
                color: (theme) => theme.app.text,
              },
            }}
            InputProps={{
              sx: {
                color: (theme) => theme.app.text,
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: (theme) => theme.app.text,
              },
            }}
            InputProps={{
              sx: {
                color: (theme) => theme.app.text,
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                sx={{ color: (theme) => theme.app.text }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                onClick={handleSignUpClick}
                variant="body2"
                sx={{ color: (theme) => theme.app.text }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
