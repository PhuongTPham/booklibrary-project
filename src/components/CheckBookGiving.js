import React, { useEffect, useState } from "react";
import Axios from "axios";

const CheckBookGiving = () => {
  const [giftBook, setGift] = useState({});
  useEffect(() => {
        Axios.get("http://localhost:4000/givingbook")
            .then(response => setGift(response.data))
    
  }, []);
  return (
    <div className="leftContainer">
      <h3>Thanks you</h3>
      <h3>Cac cuon sach dang duoc kiem tra</h3>
      <div className="category__winnerImageContainer">
        <img
          className="category__winnerImage"
          alt={giftBook.title}
          src={giftBook.coverImageSrc}
        />
      </div>
    </div>
  );
};

export default CheckBookGiving;
