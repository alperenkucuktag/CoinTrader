import React, { useEffect, useState } from "react";
import HomeView from "../view/HomeView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeController = () => {
  const [coins, setCoins] = useState([]);
  const [queryParams, setParams] = useSearchParams();
  const page = +queryParams.get("page") || 1;
  const params = {
    limit: 15,
    offset: (page - 1) * 15,
  };

  // Limit gelicek eleman sınırı
  //offset:atlanıcak eleman sayısı
  //doğru sayfadaki elemana erişmek için sayfa sayısının bir eksiğini
  //limit ile çarpmak gerekti 3 sayfadaki 5 veriyi almak için
  // ilk 10 taneyi atlamam lazım yani sayfa sayısı -1*5
  useEffect(() => {
    axios
      .get("/assets", { params })
      .then((res) => setCoins([...coins, ...res.data.data]))
      .catch((err) => console.log(err));
  }, [queryParams]);
  return <HomeView coins={coins} />;
};

export default HomeController;
