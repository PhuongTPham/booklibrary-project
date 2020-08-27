import React, { createContext, useReducer, useEffect } from "react";
import books from "../data.json";
import reducer from "../reducer/reducer";

const initialState = {
  books: books.books,
  searchString: null,
  searchedBooks: [],
  carts: []
};
// khoi tao ContextProvider
export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (localStorage.getItem("carts") !== null) {
      const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
      fetchCarts(fetchedCarts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);


  //actions
  const fetchCarts = fetchedCarts => {
    dispatch({
      type: "FETCH_CART",
      payload: fetchedCarts
    });
  };

  const addCart = idBook => {
    dispatch({
      type: "ADD_CART",
      payload: idBook
    });
  };
  const removeCart = idBook => {
    dispatch({
      type: "REMOVE_CART",
      payload: idBook
    });
  };

  const getSearchString = searchString => {
    dispatch({
      type: "GET_SEARCHED_STRING",
      payload: searchString
    });
  };

  const getSearchedBooks = searchString => {
    getSearchString(searchString);
    dispatch({
      type: "GET_SEARCHED_BOOKS",
      payload: searchString
    });
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH"
    });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        carts: state.carts,
        searchedBooks: state.searchedBooks,
        searchString: state.searchString,
        addCart,
        removeCart,
        getSearchString,
        getSearchedBooks,
        clearSearch,
        fetchCarts
      }}
    >
      {children}
    </BookContext.Provider>
  );
};