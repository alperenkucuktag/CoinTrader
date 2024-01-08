import React from "react";

const LoadMoreView = ({ handleClick }) => {
  return (
    <div className='d-flex justify-content-center my-5 '>
      <button onClick={handleClick}>Daha Fazla</button>
    </div>
  );
};

export default LoadMoreView;
