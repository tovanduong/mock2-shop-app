import { Box, Link, Typography } from "@mui/material";
import React from "react";
import ForgotForm from "../component/ForgotForm";

const Forgot = ({ propsClose }) => {
  const handleClick = () => {
    propsClose(false);
  };

  const initialValue = {
    email: "",
  };
  const handleForgotSubmit = (value) => {
    const { email } = value;
    console.log(email);
  };

  return (
    <Box className="Modal-Forgot">
      <Box ml="47px" mr="auto">
        <Typography variant="h4" mb="7px">
          Forgot Password?
        </Typography>
        <Typography variant="subtitle1" fontSize="12px" mb="31px">
          Please enter your email to recover your password{" "}
        </Typography>
      </Box>

      <ForgotForm initialValue={initialValue} onSubmit={handleForgotSubmit} />
      <Box textAlign="center">
        <Link
          textAlign="center"
          className="linkto"
          onClick={() => handleClick()}
        >
          Login
        </Link>
      </Box>
    </Box>
  );
};

export default Forgot;
