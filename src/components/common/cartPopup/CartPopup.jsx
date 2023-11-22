import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import { fetchGetCartById } from "../../../features/user/userSlice";
import ItemCartPopup from "./ItemCartPopup";
import "./itemCartPopup.scss";

const CartPopup = () => {
  const cartList = JSON.parse(localStorage.getItem("cartUser"));
  const getSubTotal = () => {
    const total = cartList?.reduce(
      (price, item) => price + item.quanity * item.price,
      0
    );
    return total;
  };
  return (
    <Box>
      <Box className="CartPopup-list">
        {cartList?.length ? (
          cartList.map((item) => {
            return (
              <Box key={item?.productId}>
                <ItemCartPopup {...item} item={item} />
              </Box>
            );
          })
        ) : (
          <>
            <Typography>There is nothing in the Cart</Typography>
            <hr />
          </>
        )}
      </Box>

      <Box className="CartPopup-container">
        <Box className="CartPopup-item">
          <Typography variant="subtitle1">Subtotal</Typography>
          <Typography variant="body1">
            {getSubTotal() ? getSubTotal() : 0} $
          </Typography>
        </Box>
        <Box className="CartPopup-item">
          <Typography variant="subtitle1">Shipping</Typography>
          <Typography variant="body1">
            {getSubTotal() === 0 || getSubTotal() === undefined ? 0 : 20} $
          </Typography>
        </Box>
        <Box className="CartPopup-item">
          <Typography variant="h6">Total</Typography>
          <Typography variant="body1">
            {getSubTotal() === 0 || getSubTotal() === undefined
              ? 0
              : getSubTotal() + 20}
            $
          </Typography>
        </Box>
        <Box className="CartPopup-btn">
          <Box>
            <Link className="CartPopup-btn-Checkout" to={true ? "/cart" : "/"}>
              View Cart
            </Link>
          </Box>
          <Button>
            <Link className="CartPopup-btn-Checkout" to={`/checkout`}>
              Checkout
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPopup;
