import React from 'react'
import { Badge } from "antd";

const ItemBookGiving = ({book}) => {
   const BookStatus = (status) => {
    if (status === "Processing") {
      return <Badge status="success" text={status} />;
    } 
  };
    return (
        <div className="categories clearFix">
        <div className="category__ImageContainer">
          <img
            className="category__Image"
            alt={book.title}
            src={book.coverImageSrc}
          />
        </div>
        <div className="wtrButtonContainer">
          <div className="ratingStars"></div>
          <div className="ratingStars wtrRating">
            <div className="starsErrorTooltip hidden">
              Error rating book. Refresh and try again.
            </div>
            <div className= "h2Container gradientHeaderContainer">
              <h2 className="brownBackground">{book.title}</h2>
            </div>
            {BookStatus(book.status)}
          </div>
        </div>
      </div>
    )
}

export default ItemBookGiving
