import React from "react";
import { Link } from "react-router-dom";
import {  Rate, Badge } from "antd";

const BookItem = ({ book }) => {

  const BookStatus = (status) => {
    if (status === "Not borrowing") {
      return <Badge status="success" text={status} />;
    } else {
      return <Badge status="error" text={status} />;
    }
  };
  return (
    <div className="category clearFix">
      <Link to={"/book/details/" + book.id}>
        <div className="category__winnerImageContainer">
          <img
            className="category__winnerImage"
            alt={book.title}
            src={book.coverImageSrc}
          />
        </div>
      </Link>
      <div className="wtrButtonContainer">
        <div className="ratingStars">
            {BookStatus(book.status)}
        </div>
        <div className="ratingStars wtrRating">
          <div className="starsErrorTooltip hidden">
            Error rating book. Refresh and try again.
          </div>
          <div className="myRating uitext greyText">Rate this book</div>
          <Rate disabled allowHalf defaultValue={book.rating} />
          
        </div>
      </div>
    </div>
  );
};

export default BookItem;
