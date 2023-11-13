import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "../component/SignUpForm";

const SignUp = ({ parentCallback }) => {
  const sendData = () => {
    parentCallback("in-actived");
  };
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSignUpSubmit = (value) => {
    console.log(value);
  };

  return (
    <Box className="modal-signUp">
      <Typography variant="h6" mb="28px">
        Welcome to Shop App
      </Typography>
      <SignUpForm initialValue={initialValue} onSubmit={handleSignUpSubmit} />
      <Box className="Box__linkto">
        <Link className={`linkto `} onClick={() => sendData()}>
          login
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
