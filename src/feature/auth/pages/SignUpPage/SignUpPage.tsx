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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../redux";
import { signUp } from "../../redux/action/authAction";
import { AuthDispatch } from "../../redux/types/AuthDispatch";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AuthDispatch>();

  const signUpApiResponse = useSelector(
    (state: RootState) => state.auth.signUp?.api?.apiState
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const fullname = data.get("fullname")?.toString();
    const username = data.get("username")?.toString();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();

    dispatch(
      signUp({
        fullname: fullname,
        username: username,
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (signUpApiResponse === "loaded") {
      navigate("/auth/login");
    }
  }, [signUpApiResponse]);

  const handleSignInClick = () => navigate("/auth/login");

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
          marginTop: 8,
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="full-name"
                name="fullname"
                required
                fullWidth
                id="fullName"
                label="Full Name"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="#"
                onClick={handleSignInClick}
                sx={{ color: (theme) => theme.app.text }}
                variant="body2"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
