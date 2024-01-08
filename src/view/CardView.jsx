import React, { useEffect } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
const CardView = ({ coin }) => {
  //   console.log(coin);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      // AOS'u başlat
      duration: 1000, // Animasyon süresi
      easing: "ease-in-out", // Animasyon eğrisi
      once: true, // Animasyonun sadece bir kez çalışmasını sağlar
    });
  }, []);
  return (
    <div
      data-aos='fade-right'
      onClick={() => navigate(`/coin/${coin.id}`)}
      className='coin-card d-flex flex-column justify-content-between border rounded p-3'
    >
      <div>
        <h3>{coin.name}</h3>
        <h6>{coin.symbol}</h6>
        <p>${millify(coin.priceUsd)}</p>
      </div>
      <p className='d-flex flex-column'>
        <span>Günlük Değişim </span>
        <span className={coin.changePercent24Hr > 0 ? "up" : "down"}>
          %{Number(coin.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
