import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/context";
import BookItem from "../components/BookItem";
import Axios from "axios";
import { Pagination } from "antd";

export default function List() {
  const { books, searchedBooks } = useContext(BookContext);
  const [bookss, setListBook] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/books").then((response) =>
      setListBook(response.data)
    );
  }, []);
  return (
    <div id="landingLeft">
      <div className="clearFix" id="categories">
        <h3 className="gr-h3">All books</h3>
        <div className="categoryContainer">
          {searchedBooks.length === 0
            ? books.map((book) => {
                return <BookItem key={book.id} book={book} />;
              })
            : searchedBooks.map((book) => {
                return <BookItem key={book.id} book={book} />;
              })}
          
        </div>
      </div>
    </div>
  );
}
