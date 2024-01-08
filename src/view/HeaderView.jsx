import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HeaderView = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.error("Çıkış yapıldı!", {
      autoClose: 700,
    });
  };
  const handleLogin = () => {
    // Simulating login here, replace with your actual login logic
    localStorage.setItem("user", "userToken"); // Set user token or any login indicator
  };

  return (
    <>
      <header className='d-flex justify-content-between p-3 align-items-center '>
        <Link className='d-flex gap-3 align-items-center'>
          <img height={40} src='/public/coin.png' alt='logo' />
          <h3 className='text-light'>CoinTrader</h3>
        </Link>
        <div className='d-flex gap-3'>
          {isLoggedIn || location.pathname === "/home" ? (
            <NavLink to={"/"} onClick={handleLogout}>
              Çıkış Yap
            </NavLink>
          ) : (
            <NavLink to={"/"}>Giriş Yap</NavLink>
          )}
          <NavLink to={"/home"} onClick={handleLogin}>
            Anasayfa
          </NavLink>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default HeaderView;
