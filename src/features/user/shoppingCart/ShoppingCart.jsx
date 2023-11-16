import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../../../components/common/ItemCart/Cart";
import CouponCodeForm from "../../../components/common/couponCode/CouponCodeForm";
import "./shoppingCart.scss";

const ShoppingCart = ({ handleAdd, handleRemove, handleClose }) => {
  const itemInCart = [
    {
      name: "KIM",
      id: 4,
      price: 50,
      image:
        "https://macstores.vn/wp-content/uploads/2023/04/thinkpad_x1_carbon_gen_11_1.png",
      quanity: 10,
    },
    {
      name: "XIAOMI",
      id: 10,
      price: 100,
      image:
        "https://macstores.vn/wp-content/uploads/2023/04/thinkpad_x1_carbon_gen_11_1.png",
      quanity: 2,
    },
  ];
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  var shipping = 20;
  const initialValue = {
    coupon: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  const getSubTotal = () => {
    const total = itemInCart?.reduce(
      (price, item) => price + item.quanity * item.price,
      0
    );
    return total;
  };

  // useEffect(() => {
  //   if (getId) dispatch(fetchGetCartById({ id: getId?.cart.id }));
  // }, [isUpdate]);

  const handleCheckOut = () => {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Box className="section-box">
        <Box className="breadCrum">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link className="breadCrum-content" to="/">
                Home
              </Link>
              <Typography
                key="3"
                color="text.primary"
                className="breadCrum-content"
              >
                Shopping Cart
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>

        <Typography variant="h4" className="ShoppingCart__name">
          Shopping Cart
        </Typography>

        <Cart
          cartItems={itemInCart}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          getSubTotal={getSubTotal}
          handleClose={handleClose}
        />

        <Box display="flex" width="100%" justifyContent="space-between">
          <Box>
            <CouponCodeForm
              onSubmit={handleSubmit}
              initialValue={initialValue}
            />
          </Box>
          <Box className="shoppingCart-CardTotal">
            <Typography variant="h5" mb="30px">
              Cart Totals
            </Typography>
            <Box className="shoppingCart-CartItem">
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="body1">{getSubTotal() || 0} $</Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Typography variant="subtitle1">Shipping</Typography>
              <Typography variant="body1">{shipping}$</Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Typography variant="h6">Total</Typography>
              <Typography variant="body1">
                {getSubTotal() + shipping || 0}$
              </Typography>
            </Box>
            <Box className="shoppingCart-CartItem">
              <Button onClick={handleCheckOut}>Proceed to checkout</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
