import React, { useEffect, useState, useCallback } from "react";
import ItemBookGiving from "./ItemBookGiving";
import * as BookAPI from "../utils/apiURLs";
import book from "../data.json"
const CheckBookGiving = () => {
  const [giftBook, setGift] = useState({});
  const fetchMyAPI = useCallback(async () => {
    let response = await BookAPI.getGivingBook()
    setGift(response);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);
  return (
    <div className="rightContainer" style={{width: "500px"}}>
      <h2 style={{textAlign: "center"}}>Thanks you</h2>
      <h3 style={{textAlign: "center"}}>All the book is given </h3>
      {book.givingbook.length !== 0
        ? book.givingbook.map((book) => {
            return <ItemBookGiving key={book.id} book={book} />;
          })
        : null}
    </div>
  );
};

export default CheckBookGiving;
