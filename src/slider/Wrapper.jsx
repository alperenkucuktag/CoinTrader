import React, { useEffect } from "react";
import millify from "millify";
import "aos/dist/aos.css";
import AOS from "aos";

const Wrapper = ({ coins }) => {
  // console.log(coins);

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
      data-aos='fade-zoom-in'
      data-aos-easing='ease-in-back'
      data-aos-delay='100'
      data-aos-offset='0'
      className='d-flex flex-row gap-3 bg-black rounded mb-3 overflow-hidden border-box'
    >
      <div className='wrapper'>
        {" "}
        {/* Bu bileşen, yatay düzen için bir wrapper olarak kullanılıyor */}
        {coins &&
          coins.map((coinss, index) => (
            <div className='slider d-flex gap-3 ' key={index}>
              {""}
              {/* Slider içeriği */}
              <div className='slide gap-2'>
                <span className='text-warning fw-bold me-2'>
                  {coinss.symbol}
                </span>
                <span className={millify(coinss.priceUsd > 0 ? "up" : "down")}>
                  ${millify(coinss.priceUsd)}
                </span>
                <span
                  className={millify(
                    coinss.changePercent24Hr > 0 ? "up" : "down"
                  )}
                >
                  %{millify(coinss.changePercent24Hr)}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wrapper;
