import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss';
import Header from './components/common/header/Header';
import Home from './features/user/Home';
import ProductByCategory from './features/user/Home/component/productList/ProductByCategory';
import ProductInfo from './features/user/ProductInfo/ProductInfo';
import ShoppingCart from './features/user/shoppingCart/ShoppingCart';

function App() {

  return (
    <>
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
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
      {/* </Suspense> */}
    </>
  );
}

export default App;
