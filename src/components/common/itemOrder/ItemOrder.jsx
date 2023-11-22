import "./itemOrder.scss";
import React from "react";
import { Box } from "@mui/material";
// import dateFormat from 'dateformat';

const ItemOrder = ({ item }) => {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        className="myInfo-order-container"
      >
        <Box gridColumn="span 2" className="myInfo-order-item">
          {item.id}
        </Box>
        <Box gridColumn="span 4" className="myInfo-order-item">
          {item.date}
        </Box>
        <Box gridColumn="span 4" className="myInfo-order-item">
          {item.status}
        </Box>
        <Box gridColumn="span 2" className="myInfo-order-item">
          {item.total}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemOrder;
