import React, { useContext } from "react";
import { BookContext } from "../context/context";
import { Button } from "antd";

const BookCartItem = (cart) => {
  const { books, removeCart } = useContext(BookContext);
  const book = books.filter((book) => book.id === cart.cart.idBook);
  const { title, coverImageSrc, pricerent } = book[0];
  const handleRemoveCart = () => {
    removeCart(cart.cart.idBook);
  };
  const [showResults, setShowResults] = React.useState(false)

  return (
    <div className="category clearFix">
      <div className="category__ImageContainer">
        <img className="category__Image" alt={title} src={coverImageSrc} />
      </div>
      <div className="wtrButtonContainer" style={{width: "80px", height: "40px"}}>
          <Button onClick={handleRemoveCart} danger style={{width: "80px", marginTop: "5px"}}>Remove</Button>
      </div>
        <div className="content">
          <div>
            <h4 className="h4-title">{title}</h4>
            <p className="p-price">Price Rent: {pricerent}</p>
          </div>
        </div>
    </div>
  );
};

export default BookCartItem;
