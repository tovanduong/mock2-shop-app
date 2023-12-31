import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import arrow_left from "../../../assets/images/arrow_left.svg";
import arrow_right from "../../../assets/images/arrow_right.svg";
import shoe_large from "../../../assets/images/shoe_large.png";
import shoe_small_1 from "../../../assets/images/shoe_small-1.png";
import shoe_small_2 from "../../../assets/images/shoe_small-2.png";
import shoe_small_3 from "../../../assets/images/shoe_small-3.png";
import shoe_small_4 from "../../../assets/images/shoe_small-4.png";
import shoe_small_5 from "../../../assets/images/shoe_small-5.png";
import "./productInfor.scss";

import Grid from "@mui/material/Grid";
import ItemCard from "../../../components/common/itemCard/ItemCard";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import Specification from "../components/Specification";
import { getProductByCategory } from "../../../api/userAPI";
import { handleGetItemHighRate } from "../../../commonUlti/commonUlti";
import { UserContext } from "../../../App";

const shoes_small = [
  shoe_small_1,
  shoe_small_2,
  shoe_small_3,
  shoe_small_4,
  shoe_small_5,
];

const ProductInfo = () => {
  const [value, setValue] = useState("description");
  const [productInfo, setProductInfo] = useState(null);
  const [listProductByCategory, setListProductByCategory] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { handleAdd } = useContext(UserContext);
  const { productID } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!productID) return;
    (async () => {
      try {
        const result = await productApi.getProductById(productID);
        setReviews(result[0].reviews);
        setProductInfo(result[0]);
      } catch (error) {
        console.log("failed to fetch product details: ", error);
      }
    })();
  }, [productID]);

  useEffect(() => {
    if (productInfo?.category) {
      getProductByCategory({ item: productInfo?.category }).then((data) => {
        const newList = handleGetItemHighRate(data[0]?.Product, 4);
        setListProductByCategory(newList);
      });
    }
  }, [productInfo]);

  const handlesetQuanityItem = (action) => {
    let itemIncreamented = { ...productInfo };
    if (itemIncreamented.quanity === 0 && action === "remove") return;
    switch (action) {
      case "add":
        itemIncreamented.quanity =
          itemIncreamented.quanity !== undefined
            ? itemIncreamented.quanity + 1
            : 1;
        break;
      case "remove":
        itemIncreamented.quanity =
          itemIncreamented.quanity !== undefined
            ? itemIncreamented.quanity - 1
            : 0;
        break;
      default:
        break;
    }
    setProductInfo(itemIncreamented);
  };
  return (
    <Container className="productInforWrapper section-box">
      {productInfo && (
        <Box>
          <Box>
            <Box className="breadCrum">
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className="breadCrum-content" to="/">
                    Home
                  </Link>
                  <Link
                    className="breadCrum-content"
                    to={`/category/${productInfo?.category}`}
                  >
                    {productInfo?.category}
                  </Link>

                  <Typography
                    key="3"
                    color="text.primary"
                    className="breadCrum-content"
                  >
                    {productInfo?.name}
                  </Typography>
                </Breadcrumbs>
              </Stack>
            </Box>
          </Box>
          <Box className="productInfo">
            <Box className="productImage">
              <Box className="productImageLarge">
                <img
                  alt="image_large"
                  className="imgLarge"
                  src={productInfo?.image || shoe_large}
                />
              </Box>
              <Box className="productImageSmall">
                {shoes_small.map((shoe_small) => (
                  <img
                    key={shoe_small}
                    alt={shoe_small}
                    className="imgSmall"
                    src={shoe_small}
                  />
                ))}
              </Box>
            </Box>

            <Box className="productSelection">
              <h1 className="titleProduct">{productInfo?.name}</h1>
              <Box className="rated">
                <Rating
                  name="simple-controlled"
                  value={+productInfo?.rating}
                  readOnly
                />
                <span className="breakContent">|</span>
                <span>150 Reviews</span>
                <span className="breakContent">|</span>
                <span>3k Sold</span>
              </Box>
              <Box className="productDescription">
                {productInfo?.description}
              </Box>
              <span className="breakLine"></span>
              <Box className="productOtherDetails">
                <div>
                  Availability:{" "}
                  {productInfo?.countInStock > 0 ? (
                    <span className="inStock">In Stock</span>
                  ) : (
                    <span className="soldOut">Sold Out</span>
                  )}
                </div>
                <div>Brand: {productInfo?.brand}</div>
                <div>SKU: 83690/32</div>
              </Box>
              <Box className="productPrice">
                <span className="price">${productInfo.price}</span>
                <span className="saleOfPrice">50% Off</span>
              </Box>

              <Box className="productQuanlity">
                <h3>Quantity:</h3>
                <div
                  className="chooseQuanlity"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <Box className="CartItem-detail">
                      <Button
                        onClick={() => handlesetQuanityItem("remove")}
                        className="CartItem-detailquanity-btn"
                      >
                        -
                      </Button>
                      <Typography>
                        {productInfo?.quanity ? productInfo?.quanity : 0}
                      </Typography>
                      <Button
                        onClick={() => handlesetQuanityItem("add")}
                        className="CartItem-detailquanity-btn"
                      >
                        +
                      </Button>
                    </Box>
                  </div>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleAdd(productInfo, productInfo.quanity)}
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Add to cart
                  </Button>
                </div>
              </Box>
              <Box className="rate">
                <h3>Rate:</h3>
                <span className="productStars">
                  <Rating
                    name="simple-controlled"
                    value={+productInfo.rating}
                  />
                </span>
              </Box>
            </Box>
          </Box>
          <Box className="productDetails">
            <Box
              className="productDetailContent"
              sx={{ width: "100%", typography: "body1" }}
            >
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "primary" }}>
                  <TabList
                    className="tabListWrapper"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      className="tabs"
                      label="description"
                      value="description"
                    />
                    <Tab
                      className="tabs"
                      label="specification"
                      value="specification"
                    />
                    <Tab className="tabs" label="reviews" value="reviews" />
                  </TabList>
                </Box>
                <Box className="contentTab">
                  <TabPanel value="description">
                    <Description description={productInfo.description} />
                  </TabPanel>
                  <TabPanel value="specification">
                    <Specification />
                  </TabPanel>
                  <TabPanel value="reviews">
                    <Reviews reviewsData={reviews} />
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>

          <Box className="relatedProducts">
            <div className="titleRelateProducts">
              <h2>Related Products</h2>
              <span className="horizontalLine"></span>
              <img alt="arrow" className="arrow arrowLeft" src={arrow_left} />
              <img alt="arrow" className="arrow arrowLeft" src={arrow_right} />
            </div>
            <Box className="listRelatedProduct">
              <Grid
                container
                spacing={{ xs: 1, md: 2, xl: "10px" }}
                columns={{ xs: 12, sm: 12, md: 12, xl: 12 }}
              >
                {listProductByCategory &&
                  listProductByCategory.map((item) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <ItemCard {...item} handleAdd={() => {}} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ProductInfo;
