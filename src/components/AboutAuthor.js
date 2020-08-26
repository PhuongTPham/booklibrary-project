import React from "react";

const AboutAuthor = () => {
  return (
    <div id="aboutAuthor" className="clearFloats bigBox">
      <div className="h2Container gradientHeaderContainer">
        <h2 className="brownBackground">
          <a href="/author/show/1406384.John_Green">About John Green</a>
        </h2>
      </div>
      <div className="bigBoxBody">
        <div className="bigBoxContent containerWithHeaderContent">
          <div className="bookAuthorProfile">
            <div className="bookAuthorProfile__topContainer">
              <div className="bookAuthorProfile__photoContainer">
                <a href="/author/show/1406384.John_Green">
                  <div className="bookAuthorProfile__photo" style={{backgroundImage: "url(https://images.gr-assets.com/authors/1353452301p3/1406384.jpg)"}}></div>
                </a>
              </div>
              <div className="bookAuthorProfile__widgetContainer">
                <div className="bookAuthorProfile__name">
                  <a href="/home">John_Green</a>
                </div>
                <div className="bookAuthorProfile__followerCount">273,710 followers</div>
                <div className="authorFollowButtonContainer">
                  <button name="button" type="button" className="gr-button js-AuthorFollow gr-button--fullWidth gr-button--togglable--disabled">
                  Follow Author
                  </button>
                </div>
              </div>
            </div>
            <div className="bookAuthorProfile__about">
              <span id= "freeTextContainer">
                Librarian Note: There is more than one author in the Goodreads database with this name.
              </span>
              <br />
              <br />
              <span id="freeText">
                John Green's first novel, Looking for Alaska, won the 2006 Michael L. Printz Award presented by the American Library Association. His second novel, 
                An Abundance of Katherines, was a 2007 Michael L. Printz Award Honor Book and a finalist for the Los Angeles Times Book Prize. His
              </span>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="bigBoxBottom"></div>
    </div>
  );
};

export default AboutAuthor;
