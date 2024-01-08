import React from "react";
import LoadMoreView from "../view/LoadMoreView";
import { useSearchParams } from "react-router-dom";

const LoadMoreConroller = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    //Url'deki page parametresini al
    const pageNumber = params.get("page") || 1;
    //Url 'i güncelle ve sayfa değerini bir arttır
    setParams({ page: +pageNumber + 1 });
    console.log(pageNumber);
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreConroller;
