import React, { useEffect, useState} from "react";
import ItemBookGiving from "./ItemBookGiving";
import * as BookAPI from "../utils/apiURLs";
const CheckBookGiving = () => {
  const [giftBook, setGift] = useState([]);
  const getGiftBooks = () => {
    BookAPI.getGivingBook().then((res) => setGift(res));
  };

  useEffect(() => {
    getGiftBooks();
  }, []);
  return (
    <div className="rightContainer" style={{width: "500px"}}>
      <h2 style={{textAlign: "center"}}>Thanks you</h2>
      <h3 style={{textAlign: "center"}}>All the book is given </h3>
      {giftBook.length !== 0
        ? giftBook.map((book) => {
            return <ItemBookGiving key={book.id} book={book} />;
          })
        : 0}
    </div>
  );
};

export default CheckBookGiving;
