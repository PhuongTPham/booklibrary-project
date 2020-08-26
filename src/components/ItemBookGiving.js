import React from 'react'
import { Rate } from "antd";

const ItemBookGiving = ({book}) => {
  console.log(book)
    return (
        <div className="category clearFix">
        <div className="category__winnerImageContainer">
          <img
            className="category__winnerImage"
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
            <div className="myRating uitext greyText">Rate this book</div>
            <Rate disabled allowHalf defaultValue={book.rating} />
          </div>
        </div>
      </div>
    )
}

export default ItemBookGiving
