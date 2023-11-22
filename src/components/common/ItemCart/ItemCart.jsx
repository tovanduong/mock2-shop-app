import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../App";

const ItemCart = ({ item, total, price, handleRemove, handleClose }) => {
  const { handleAdd, handleDelete, handleRemoveProduct } =
    useContext(UserContext);

  const getTotalProduct = (item) => {
    const total = item.quanity * item.price;
    return total;
  };
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        className="CartItem-container"
      >
        <Box gridColumn="span 2" className="CartItem">
          <Box>
            <img src={item.image} alt={item.name} />
          </Box>
        </Box>
        <Box gridColumn="span 3" className="CartItem">
          <Box>{item.name}</Box>
        </Box>
        <Box gridColumn="span 2" className="CartItem">
          <Box>{price} $</Box>
        </Box>
        <Box gridColumn="span 3" className="CartItem">
          <Box>
            <Button
              disabled={total === 0 ? true : false}
              onClick={() => handleDelete(item)}
              className="CartItem--quanity-btn"
            >
              -
            </Button>
            <Typography>{item.quanity}</Typography>
            <Button
              onClick={() => handleAdd(item)}
              className="CartItem--quanity-btn"
            >
              +
            </Button>
          </Box>
        </Box>
        <Box gridColumn="span 2" className="CartItem" position="relative">
          <Box>{getTotalProduct(item)} $</Box>
          <span
            className="CardItem-Close"
            onClick={() => handleRemoveProduct(item)}
          >
            X
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCart;
