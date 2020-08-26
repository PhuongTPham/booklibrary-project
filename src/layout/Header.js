import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/context";
import Search from "../components/SearchBook";

const Header = () => {
  const { carts } = useContext(BookContext);
   return (
    <div className="siteHeader">
      <header>
        <div className="siteHeader__topLine gr-box gr-box--withShadow">
          <div className="siteHeader__contents">
            <div className="siteHeader__topLevelItem siteHeader__topLevelItem--searchIcon">
              <button
                className="siteHeader__searchIcon gr-iconButton"
                type="button"
              ></button>
            </div>
            <a href="/" className="siteHeader__logo" title="Libraries Home" />
            <nav className="siteHeader__primaryNavInline">
              <ul role="menu" className="siteHeader__menuList">
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  <Link to="/" className="siteHeader__topLevelLink">
                    Home
                  </Link>
                </li>
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  {/* <Link to="/book-cart" className="siteHeader__topLevelLink">
                    Borrow Book
                  </Link> */}
                </li>
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  <Link
                    to="/book/giving-book"
                    className="siteHeader__topLevelLink"
                  >
                    Giving Book
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="searchBox searchBox--navbar">
              <Search />
            </div>
            <div className="siteHeader__personal">
              <ul className="personalNav">
                <li className="personalNav__listItem"></li>

                <li className="personalNav__listItem">
                  {/* <a
                    href="/book-cart"
                    title="Carts"
                    className="headerPersonalNav"
                  >
                    <span className="headerPersonalNav__icon headerPersonalNav__icon--inbox"></span>
                  </a> */}
                  <Link to="/book-cart" className="siteHeader__topLevelLink">
                    Want to Rent (
                    <span style={{ color: "#FF0000" }}>
                        {carts.length !== 0 ? carts.length : 0}
                    </span>
                    )
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="headroom-wrapper">
          <div
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              right: "0px",
              zIndex: "1",
              transform: "translateY(-100%)",
              transition: "all 0.2s ease-in-out 0s",
            }}
            className="headroom headroom--unpinned headroom--scrolled"
          >
            <nav className="siteHeader__primaryNavSeparateLine gr-box gr-box--withShadow">
              <ul role="menu" className="siteHeader__menuList">
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  <Link to="/home" className="siteHeader__topLevelLink">
                    Home
                  </Link>
                </li>
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  <Link to="/book/rent" className="siteHeader__topLevelLink">
                    Borrow Book
                  </Link>
                </li>
                <li className="siteHeader__topLevelItem siteHeader__topLevelItem--home">
                  <Link
                    to="/book/giving-book"
                    className="siteHeader__topLevelLink"
                  >
                    Giving Book
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="siteHeaderBottomSpacer"></div>
    </div>
  );
};
export default Header;
