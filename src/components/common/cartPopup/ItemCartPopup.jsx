import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import "./itemCartPopup.scss";
import { UserContext } from "../../../App";

const ItemCartPopup = ({ item }) => {
  const { handleRemoveProduct } = useContext(UserContext);
  return (
    <Box className="Item-Group">
      <Box className="Item-Info">
        <Box className="Item-Info-img">
          <img src={item.image} alt={item.name} />
        </Box>
        <Box className="Item-Info-Group">
          <Typography variant="subtitle1" className="Item-Info-name">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" className="Item-Info-totalPrice">
            {item.quanity} X {item.price}$
          </Typography>
        </Box>
        <Box
          className="closeItemPopUp"
          onClick={() => handleRemoveProduct(item)}
        >
          X
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default ItemCartPopup;
