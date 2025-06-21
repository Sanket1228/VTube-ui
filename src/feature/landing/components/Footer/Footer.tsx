import { Link, Typography } from "@mui/material";

export const Footer = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://vtube.com/">
        vtube.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
