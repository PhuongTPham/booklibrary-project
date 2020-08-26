import React, { useContext} from "react";
import { BookContext } from "../context/context";
import { Button, Col } from 'antd';

const BookCartItem = (cart) => {
  const { books, removeCart } = useContext(BookContext);
  const book = books.filter((book) => book.id === cart.cart.idBook);
  const { title, coverImageSrc, pricerent } = book[0];

  const handleRemoveCart = () => {
    removeCart(cart.cart.idBook);
  };
  return (
    <Col className="gutter-row" span={6}>
        <div className="cart-item">
          <div className="content">
            <div className="image-content">
              <img src={coverImageSrc} alt={title} className="image-repsonsive product-image" />
            </div>
            <div>
              <h4 className="h4-title">{title}</h4>
              <p className="p-price">Price Rent: {pricerent}</p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <Button onClick={handleRemoveCart} type="default" danger >
                Remove
            </Button>
            </div>
          </div>
        </div>
    </Col>
  );
};

export default BookCartItem;
