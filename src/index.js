import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style.js';
import { GlobalIconStyle } from './statics/iconfont/iconfont.js';
// import App from './App';
import Header from "./common/header";
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';
import Detail from './pages/detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <GlobalStyle />
        <GlobalIconStyle/>
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/write' element={<Write></Write>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


