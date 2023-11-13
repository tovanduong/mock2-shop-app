import CloseIcon from "@mui/icons-material/Close";
import { Box, Link, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../../assets/images/icon/ShopApp.png";
import Bag from "../../../assets/images/icon/VectorBag.png";
import LoginForm from "../component/LoginForm";
import Forgot from "./Forgot";
import { postLogin } from "../../../api/authApi";
import { fetchLogin } from "../authSlice";
import { useDispatch } from "react-redux";
const Login = ({ parentCallback, onClose }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const sendData = () => {
    parentCallback("Actived");
  };
  const childClose = (childData) => {
    setOpen(childData);
  };

  const initialValue = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = (value) => {
    // const { email, password } = value;
    console.log(value);
    dispatch(fetchLogin({ username: "kminchelle", password: "0lelplR" }));
    postLogin({ username: "kminchelle", password: "0lelplR" });
  };

  return (
    <Box className="Modal-Container">
      <Typography variant="h6" mb="44px">
        Welcome to Shop App
      </Typography>
      <LoginForm
        initialValue={initialValue}
        onSubmit={handleLoginSubmit}
        onClick={handleOpen}
        onClose={onClose}
      />

      <Box className="Box__linkto">
        <Link className="linkto" onClick={() => sendData()}>
          Create An Account
        </Link>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box-auth">
          <CloseIcon className="close-modal" onClick={handleClose} />
          <Forgot propsClose={childClose} />
          <Box className="auth-layout">
            <img src={Bag} alt="VectorBag" />
            <img src={Logo} alt="ShopApp" />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
