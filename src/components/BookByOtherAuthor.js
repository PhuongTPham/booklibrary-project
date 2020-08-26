import React from "react";

const BookByOtherAuthor = () => {
  return (
    <div className=" clearFloats bigBox">
      <div className="h2Container gradientHeaderContainer">
        <h2 className="brownBackground">
          <a href="/author/list/1406384.John_Green">Books by John Green</a>
        </h2>
      </div>
      <div className="bigBoxBody">
        <div className="bigBoxContent containerWithHeaderContent">
          <div className="js-dataTooltip">
            <div className="js-tooltipTrigger tooltipTrigger">
              <a href="/book/show/99561.Looking_for_Alaska">
                <img
                  id="more_book_99561"
                  alt="Looking for Alaska"
                  width="50"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394798630l/99561._SX98_.jpg"
                />
              </a>
            </div>
            <div className="js-tooltipTrigger tooltipTrigger">
              <a href="/book/show/6442769-paper-towns">
                <img
                  id="more_book_6442769"
                  alt="Paper Towns"
                  width="50"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349013610l/6442769._SX98_.jpg"
                />
              </a>
            </div>
            <div className="js-tooltipTrigger tooltipTrigger">
              <a href="/book/show/49750.An_Abundance_of_Katherines">
                <img
                  id="more_book_49750"
                  alt="An Abundance of Katherines"
                  width="50"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206426l/49750._SX98_.jpg"
                />
              </a>
            </div>
            <div className="js-tooltipTrigger tooltipTrigger">
              <a href="/book/show/6567017-will-grayson-will-grayson">
                <img
                  id="more_book_6567017"
                  alt="Will Grayson, Will Grayson"
                  width="50"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1368393890l/6567017._SX98_.jpg"
                />
              </a>
            </div>
            <div className="js-tooltipTrigger tooltipTrigger">
              <a href="/book/show/35504431-turtles-all-the-way-down">
                <img
                  id="more_book_35504431"
                  alt="Turtles All the Way Down"
                  width="50"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503002776l/35504431._SX98_.jpg"
                />
              </a>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="bigBoxBottom"></div>
    </div>
  );
};

export default BookByOtherAuthor;
