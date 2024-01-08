import React, { useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import millify from "millify";
import CardView from "./CardView";
import LoadMoreController from "../Controllers/LoadMoreConroller";
import LoadMoreView from "./LoadMoreView";
import { useNavigate } from "react-router-dom";
import Wrapper from "../slider/Wrapper";
import "aos/dist/aos.css";
import AOS from "aos";
const HomeView = ({ coins }) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      // AOS'u başlat
      duration: 2000, // Animasyon süresi (isteğe bağlı)
      easing: "ease-in-out", // Animasyon eğrisi (isteğe bağlı)
      once: true, // Animasyonun sadece bir kez çalışmasını sağlar (isteğe bağlı)
    });
  }, []);
  return (
    <div className='container-xl mt-5'>
      <Wrapper coins={coins} />
      <h4 className='d-flex align-items-center gap-3'>
        <FaBitcoin />
        <span>Hoş Geldiniz ,Coin listesi</span>
      </h4>
      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>
      <div className='d-flex gap-4 justify-content-around my-5'>
        {coins && coins.slice(0, 3).map((coin) => <CardView coin={coin} />)}
      </div>

      <table className='table table-dark table-hover mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>fiyat</th>
            <th>Market Hacmi</th>
            <th>değişim (24s)</th>
            <th>İşlem Hacmi</th>
            <th>VWAP(24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins.map((coin) => (
              <tr
                data-aos='fade-right'
                onClick={() => navigate(`/coin/${coin.id}`)}
              >
                <td>{coin?.rank}</td>
                <td>
                  <span className='text-warning fw-bold me-2'>
                    {coin.symbol}
                  </span>
                  <span className='text-nowrap text-truncate'>{coin.name}</span>
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>${millify(coin.marketCapUsd)}</td>
                <td>${millify(coin.volumeUsd24Hr)}</td>
                <td className={coin.changePercent24Hr > 0 ? "up" : "down"}>
                  {millify(coin.changePercent24Hr)} %
                </td>
                <td>{millify(coin.vwap24Hr)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default HomeView;
