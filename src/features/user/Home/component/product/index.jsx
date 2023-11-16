import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllProduct } from "../../../userSlice";
import ProductList from "../productList/ProductList";

export default function Products({ handleAdd }) {
  const dispatch = useDispatch();
  const [cate, setCate] = useState();
  const { product } = useSelector((state) => state.user);
  const { category } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchGetAllProduct());
  }, []);
  useEffect(() => {
    //get 3 category are best seller
    if (category) {
      const [item1, item2, item3] = category;
      let list = [item1, item2, item3];
      setCate(list);
    }
  }, [category]);

  return (
    <Box mb={3}>
      {cate?.length &&
        cate.map((ele, index) => {
          return (
            <Box key={index}>
              <ProductList
                handleAdd={handleAdd}
                product={product}
                item={ele?.name}
              />
            </Box>
          );
        })}
    </Box>
  );
}
