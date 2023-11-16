// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';
// import { purple } from '@mui/material/colors';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss';
import Header from './components/common/header/Header';
import Home from './features/user/Home';
import ProductByCategory from './features/user/Home/component/productList/ProductByCategory';
import ProductInfo from './features/user/ProductInfo/ProductInfo';
// const User = React.lazy(() => import('./features/user'));
// const Admin = React.lazy(() => import('./features/admin'));
// const Auth = React.lazy(() => import('./features/auth'));
// const NotFound = React.lazy(() => import('./components/common/NotFound'));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>       
             <Routes>
            <Route path="/:categoryName" element={<ProductByCategory />} />
          </Routes>
          <Routes>
            <Route path="/product/:productID" element={<ProductInfo handleAdd={()=>{}} handleRemove={()=>{}} />} />
          </Routes>
          {/* <Routes
          path="/product/:productID"
          element={<ProductInfo handleAdd={()=>{}} handleRemove={()=>{}} />}
        /> */}
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </Suspense>
    </>
  );
}

export default App;
