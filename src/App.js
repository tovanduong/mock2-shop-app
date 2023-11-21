import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss';
import Header from './components/common/header/Header';
import Home from './features/user/Home';
import ProductByCategory from './features/user/Home/component/productList/ProductByCategory';
import ProductInfo from './features/user/ProductInfo/ProductInfo';
import ShoppingCart from './features/user/shoppingCart/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCartList, updateCartList } from './features/user/userSlice';
export const UserContext = createContext();

function App() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.user);
  const handleAdd = (item) => {
    const isExist = cartList.some((ele) => ele.productId === item);
    if (isExist) {
      const newArr = cartList.map((el) => {
        if (el.productId === item) return { ...el, quanity: el.quanity + 1 };
        else return el;
      });
      dispatch(updateCartList(newArr));
    } else {
      const getItemAdd = product.find((el) => el.productId === item);
      dispatch(addCartList({ ...getItemAdd, quanity: 1 }));
    }
  };
  return (
    <>
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <UserContext.Provider value={{ handleAdd }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/category/:categoryName" element={<ProductByCategory />} />
          </Routes>
          <Routes>
            <Route path="/product/:productID" element={<ProductInfo handleAdd={() => { }} handleRemove={() => { }} />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<ShoppingCart
              handleAdd={() => { }}
            />} />
          </Routes>

        </BrowserRouter>
      </UserContext.Provider>
      {/* </Suspense> */}
    </>
  );
}

export default App;
