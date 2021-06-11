import { Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";

export default function BookContent() {
  return (
    <>
      <Typography>
        <Link component={RouterLink} to="">
          Book Details
        </Link>
      </Typography>
      <Typography>
        <Link color="inherit" component={RouterLink} to="author">
          Author
        </Link>
      </Typography>

      <Outlet />
    </>
  );
}
