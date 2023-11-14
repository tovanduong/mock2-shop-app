// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';
// import { purple } from '@mui/material/colors';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss';
import Header from './components/common/header/Header';
import Home from './features/user/Home';
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
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </Suspense>
    </>
  );
}

export default App;
