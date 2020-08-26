import React, { useContext } from "react";
import { BookContext } from "../context/context";
import { Button } from "antd";
import {  useHistory } from "react-router-dom";
import BookCartItem from "../components/BookCartItem";
import BorrowBook from "./BorrowBook";

function BookCart() {
  const { carts } = useContext(BookContext);
  let history = useHistory();

  const handleClick = () => {
    history.push("/booklibrary-project")
  }
  if (carts.length === 0) {
    return (
      <div
        className="mainContentContainer"
        style={{ backgroundColor: "#FFFF", paddingTop: "80px" }}
      >
        <div className="mainContent">
          <div className="mainContentFloat" style={{textAlign: "center"}}>
            <h2>Empty Cart</h2>
            <h2>Do you want to rent other books?</h2>
            <Button
            variant="contained"
            onClick={handleClick}
            size="large"
            style={{width: "150px", color: "white", backgroundColor: "black" }}
          >
            Back to Home 
          </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="mainContentContainer"
        style={{ backgroundColor: "#FFFF", paddingTop: "80px" }}
      >
        <div className="mainContent">
          <div className="mainContentFloat">
            <h1 className="display-4" style={{ textAlign: "center" }}>
              Borrowing Book
            </h1>

            <div className="leftContainer">
              <BorrowBook />
            </div>
            <div
              className="rightContainer"
              style={{ width: "520px" }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              type="flex"
            >
              {carts.map((cart) => (
                <BookCartItem key={cart.idBook} cart={cart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCart;
