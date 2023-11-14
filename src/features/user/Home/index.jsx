import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListIcon from "@mui/icons-material/List";
import { Box, Container, List, ListItem, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../../../components/common/header/Header";
import { fetchGetAllCategory, fetchGetAllProduct } from "../userSlice";
import Products from "./component/product/index";
// import Carousel from "./component/carousel/Carousel";
// import VerifyEmail from "./component/VerifyEmail";
import "./home.scss";
// import Benefit from "../../components/Benefit";
import { Link } from "react-router-dom";
import Carousel from "./component/carousel/Carousel";

export default function Home({}) {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.user);
  console.log(category);
  // const handleClose = () => setOpen(false);
  // useEffect(() => {
  //   if (user && user.isEmailVerified === false) {
  //     dispatch(fetchSendVerifyEmail({ deviceId: deviceId }));
  //     setOpen(true);
  //   }
  // }, [user]);

  useEffect(() => {
    dispatch(fetchGetAllProduct());
    dispatch(fetchGetAllCategory());
  }, []);

  const handleRate = () => {
    let getProductlist = [...product];

    const carousel =
      getProductlist &&
      getProductlist
        .filter((item) => {
          return Number(item.rating) >= 3;
        })
        .sort(function (a, b) {
          return b.rating - a.rating;
        });
    const [rate1, rate2, rate3] = carousel;
    const printCarousel = [rate1, rate2, rate3];
    return printCarousel;
  };

  return (
    <Box>
      {/* <Header /> */}
      <Container className="user-container">
        <Box className="Home__GroupCate">
          <Box width="20%" bgcolor="#3D464D">
            <List className="Home__Cate-list">
              <ListItem disablePadding className="Home__Cate-title">
                <ListIcon />
                Categories
              </ListItem>
              {category &&
                category.map((item, index) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton className="Home__Cate-item">
                        <Link className="Home__Cate-link" to={`/${item.name}`}>
                          {item.name}
                        </Link>
                        <ArrowForwardIosIcon sx={{ color: "#FFF" }} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </List>
          </Box>

          <Box className="Home__GroupCate-carousel">
            {product && (
              <Carousel propsProduct={product} rateProps={handleRate} />
            )}
          </Box>
        </Box>
        <Box my={2}>{/* <Benefit /> */}</Box>
        <Products handleAdd={() => {}} category={category} />
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box-auth">
            <VerifyEmail onClose={handleClose} />
            <Box className="auth-layout">
              <img src={Bag} alt="VectorBag" />
              <img src={Logo} alt="ShopApp" />
            </Box>
          </Box>
        </Modal> */}
      </Container>
    </Box>
  );
}
