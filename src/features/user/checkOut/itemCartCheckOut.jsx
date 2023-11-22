import { Box } from "@mui/material";
import React from "react";

const ItemCartCheckOut = ({ item }) => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        className="CheckOut-ItemCart-Container"
      >
        <Box gridColumn="span 3" className="CheckOut-ItemCart">
          <img src={item.image} alt={item.name} />
        </Box>
        <Box gridColumn="span 6" className="CheckOut-ItemCart">
          <Box className="CheckOut-ItemCart-name">{item.name}</Box>
          <Box className="CheckOut-ItemCart-quantity">Qty: {item.quanity}</Box>
        </Box>
        <Box gridColumn="span 3" className="CheckOut-ItemCart">
          {item.quanity * item.price} $
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCartCheckOut;
