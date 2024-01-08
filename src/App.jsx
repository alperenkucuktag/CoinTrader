import React from "react";
import Auth from "./view/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeController from "./Controllers/HomeController";
import DetailController from "./Controllers/DetailController";
import HeaderView from "./view/HeaderView";
import axios from "axios";
axios.defaults.baseURL = "https://api.coincap.io/v2";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<HomeController />} />
        <Route path='/coin/:id' element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
