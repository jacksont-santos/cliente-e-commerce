import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { GlobalStyle } from './styles/globalStyles';
import Header from './components/header/header';
import Home from "./components/home/home";
import Login from "./components/login/login";
import Profile from "./components/perfil/perfil";
import Prod from "./pages/product/product";

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/user'} element={<Profile/>} />
        <Route path={'/product'} element={<Prod/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);