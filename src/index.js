import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style.js';
import { GlobalIconStyle } from './statics/iconfont/iconfont.js';
// import App from './App';
import Header from "./common/header";
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <GlobalStyle />
        <GlobalIconStyle/>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/detail' element={<Detail></Detail>}></Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


