import { Email, Lock, LockOutlined } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Link,
  Paper,
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

  const loginApiState = useSelector(
    (state: RootState) => state.auth.login.api.apiState
  );

  const loginError = useSelector(
    (state: RootState) => state.auth.login.api.error
  );

  useEffect(() => {
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
    <Paper
      elevation={6}
      sx={{
        padding: 4,
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
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
          sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {loginError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {loginError}
            </Alert>
          )}
          <TextField
            required
            fullWidth
            id="email"
            placeholder="Enter Email Id"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: (theme) => theme.app?.text ?? "#fff" }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                color: (theme) => theme.app?.text ?? "#fff",
                "& input": {
                  paddingLeft: 1.5, // This adds spacing between icon and text
                },
              },
            }}
          />
          <TextField
            required
            fullWidth
            name="password"
            placeholder="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: (theme) => theme.app?.text ?? "#fff" }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
                color: (theme) => theme.app?.text ?? "#fff",
                "& input": {
                  paddingLeft: 1.5, // This adds spacing between icon and text
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            {loginApiState === "loading" ? (
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                }}
              />
            ) : (
              "Sign In"
            )}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                onClick={handleSignUpClick}
                variant="body2"
                sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};
