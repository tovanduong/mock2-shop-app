import "./productList.scss";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ItemCard from "../../../../../components/common/itemCard/ItemCard";
import { getProductByCategory } from "../../../../../api/userAPI";
import { Link } from "react-router-dom";
import { handleGetItemHighRate } from "../../../../../commonUlti/commonUlti";

const ProductList = ({ item }) => {
  const [listItem, setListItem] = useState([]);
  const [alllistItem, setAllListItem] = useState([]);
  useEffect(() => {
    if (item) {
      getProductByCategory({ item: item }).then((data) => {
        const newList = handleGetItemHighRate(data[0]?.Product, 4);
        setAllListItem(data[0]?.Product);
        setListItem(newList);
      });
    }
  }, [item]);
  return (
    <Box>
      <Box className="category-title">
        <Typography variant="h6" className="category-name">
          {item}
        </Typography>
        {alllistItem.length > 4 && (
          <Box className="category-showmore">
            <Link to={`/category/${item}`}>Show more...</Link>
          </Box>
        )}
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 2, xl: "10px" }}
        columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
      >
        {listItem &&
          listItem.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item?.id}>
                <ItemCard {...item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default ProductList;
