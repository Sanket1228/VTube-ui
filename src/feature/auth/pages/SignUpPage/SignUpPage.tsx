import {
  AccountCircle,
  Email,
  Lock,
  LockOutlined,
  Person,
} from "@mui/icons-material";
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

  const signUpError = useSelector(
    (state: RootState) => state.auth.signUp.api.error
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {signUpError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {signUpError}
            </Alert>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="full-name"
                placeholder="Enter fullname"
                required
                fullWidth
                id="fullName"
                autoFocus
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person
                        sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    color: (theme) => theme.app?.text ?? "#fff",
                    "& input": {
                      paddingLeft: 1.5,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: (theme) => theme.app?.text ?? "#fff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="Enter Email Address"
                name="email"
                autoComplete="email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email
                        sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    color: (theme) => theme.app?.text ?? "#fff",
                    "& input": {
                      paddingLeft: 1.5,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: (theme) => theme.app?.text ?? "#fff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                placeholder="Enter Username"
                name="username"
                autoComplete="username"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle
                        sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    color: (theme) => theme.app?.text ?? "#fff",
                    "& input": {
                      paddingLeft: 1.5,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: (theme) => theme.app?.text ?? "#fff",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock
                        sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    color: (theme) => theme.app?.text ?? "#fff",
                    "& input": {
                      paddingLeft: 1.5,
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: (theme) => theme.app?.text ?? "#fff",
                  },
                }}
              />
            </Grid>
          </Grid>
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
            {signUpApiResponse === "loading" ? (
              <CircularProgress
                size={24}
                sx={{
                  color: "white",
                }}
              />
            ) : (
              "Sign Up"
            )}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                onClick={handleSignInClick}
                sx={{ color: (theme) => theme.app?.text ?? "#fff" }}
                variant="body2"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};
