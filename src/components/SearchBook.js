import React, { useState, useContext, useEffect } from "react";
import {Input} from 'antd'
import {BookContext} from '../context/context'
const {Search} = Input

const SearchBook = () => {
  const [keywords, setKeywords] = useState("");
  const { getSearchedBooks, searchString } = useContext(BookContext);

  const handleChange = e => {
    setKeywords(e.target.value);
    getSearchedBooks(e.target.value);
  };

  useEffect(() => {
    if (searchString === null) {
      setKeywords("");
    }
  }, [searchString]);
  
  return(
    
    <Search
       placeholder="input search text"
      value={keywords}
      style={{width: "500px"}}
      onChange={handleChange}
    />
  );
};
export default SearchBook;
