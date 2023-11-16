import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ItemCart = ({
  item,
  total,
  price,
  handleAdd,
  handleRemove,
  handleClose,
}) => {
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
              onClick={() => handleRemove(item)}
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
          <span className="CardItem-Close" onClick={() => handleClose(item)}>
            X
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCart;
