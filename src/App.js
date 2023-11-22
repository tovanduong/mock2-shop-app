import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss';
import Header from './components/common/header/Header';
import Home from './features/user/Home';
import ProductByCategory from './features/user/Home/component/productList/ProductByCategory';
import ProductInfo from './features/user/ProductInfo/ProductInfo';
import ShoppingCart from './features/user/shoppingCart/ShoppingCart';
import { addCartList, updateCartList } from './features/user/userSlice';
import CheckOut from './features/user/checkOut/checkOut';
import Info from './features/user/Info/index';
export const UserContext = createContext();

function App() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.user);
  const cartLists = JSON.parse(localStorage.getItem("cartUser"));
  const handleAdd = (item, step = 1) => {
    const isExist = cartLists && cartLists.some((ele) => ele.productId === item.productId);
    if (isExist) {
      const newList = cartLists.map((el) => {
        if (el.productId === item.productId) return { ...el, quanity: el.quanity + step };
        else return el;
      });
      dispatch(updateCartList(newList));
    } else {
      const getItemAdd = product.find((el) => el.productId === item.productId);
      dispatch(addCartList({ ...getItemAdd, quanity: step }));
    }
  };

  const handleDelete = (item) => {
    if (!item.quanity) return
    const newList = cartLists.map((el) => {
      if (el.productId === item.productId) return { ...el, quanity: el.quanity - 1 };
      else return el;
    });
    dispatch(updateCartList(newList));
  };

  const handleRemoveProduct = (item) => {
    const getCartList = [...cartLists]
    const listNewItem = getCartList.filter(el => el.productId !== item.productId)
    dispatch(updateCartList(listNewItem));
  }

  return (
    <>
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <UserContext.Provider value={{ handleAdd, handleRemoveProduct, handleDelete }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/category/:categoryName" element={<ProductByCategory />} />
          </Routes>
          <Routes>
            <Route path="/product/:productID" element={<ProductInfo />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <Routes>
            <Route path="/myAccount/*" element={<Info />} />
          </Routes>
          <Routes>
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      {/* </Suspense> */}
    </>
  );
}

export default App;
