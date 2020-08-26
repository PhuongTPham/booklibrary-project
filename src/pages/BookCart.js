import React, { useContext } from "react";
import { BookContext } from "../context/context";

import BookCartItem from "../components/BookCartItem";
import {  Row } from "antd";
import BorrowBook from "./BorrowBook";


function BookCart() {
  const { carts } = useContext(BookContext);
  console.log(carts)
  if (carts.length === 0) {
    return <h1>Empty</h1>;
  } else {
    return (

        <div
          className="mainContentContainer"
          style={{ backgroundColor: "#FFFF", paddingTop: "50px" }}
        >
          <div className="mainContent">
            <div className="mainContentFloat">
              <h1 className="display-4">Borrowing Book</h1>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex">
                {carts.map((cart) => (
                  <BookCartItem key={cart.idBook} cart={cart} />
                ))}
              </Row>
              <Row>
                <BorrowBook />
              </Row>
            </div>
          </div>
        </div>
    );
  }
}

export default BookCart;
