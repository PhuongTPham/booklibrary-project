import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/context";
import { Button } from "semantic-ui-react";

import { urlDownload, urlReadExcerpt } from "../constant/index";
import BookComment from "../components/BookComment";
import BestBookEver from "../components/BestBookEver";
import ListComment from "../components/ListComment";
import SideBarRight from "../layout/SideBarRight";
import * as BookAPI from "../utils/apiURLs"
export default function BookDetail() {
  const { id } = useParams();
  const [book, setBookDetail] = useState({});
  const [disableBtn, setDisableBtn] = useState(true)
  const { addCart } = useContext(BookContext);

  const handleAddCart = () => {
    addCart(id);
  };
  const getDetailById = () => {
    BookAPI.getById(id).then((jsonResponse) => {
        setBookDetail(jsonResponse)
        if(jsonResponse.status === "Not borrowing") {
          setDisableBtn(false)
        } else if(jsonResponse.status === "borrowing"){
          setDisableBtn(true)
        }
      })
  }
  useEffect(() => {
    getDetailById();
  }, []);
 
 return (
    <div
      className="mainContentContainer"
      style={{ backgroundColor: "#FFFF", paddingTop: "50px" }}
    >
      <div className="mainContent">
        <div className="mainContentFloat">
          <div id="flashContainer"></div>
          <div className="leftContainer">
            <div id="topcol" className="last col stacked">
              <div id="imagecol" className="col">
                <div className="bookCoverContainer">
                  <div className="bookCoverPrimary">
                    <a
                      rel="nofollow"
                      itemProp="image"
                      href="/book/photo/11870085-the-fault-in-our-stars"
                    >
                      <img
                        id="coverImage"
                        alt={book.title}
                        src={book.coverImageSrc}
                      />
                    </a>
                  </div>
                  <div
                    className="bookCoverActions"
                    style={{ display: "block" }}
                  >
                    <div className="coverButtonContainer">
                      <div className="coverButton">
                        <a href="https://www.goodreads.com/work/editions/16827462-the-fault-in-our-stars">
                          Other editions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wtrButtonContainer">
                  <div className="wtrDown wtrLeft wtrStatusToRead">
                    <Button onClick={handleAddCart} disabled={disableBtn} style={{marginLeft: "5px", padding: "0px"}}>Want to borrow</Button>
                    <div className="wtrPrompt wtrPromptToReview">
                      <a href="/review/edit/11870085">Write a review</a>
                    </div>
                  </div>
                  <div className="wtrDown wtrRight">
                    <button className="wtrShelfButton"></button>
                  </div>
                 
                </div>
                <div className="previewButtonContainer"></div>
                <br />
                <a
                  className="gr-hyperlink actionLinkLite"
                  href={urlReadExcerpt}
                >
                  Read Excerpt
                </a>
              </div>
              <div id="metacol" className="last col">
                <h1 id="bookTitle" className="gr-h1 gr-h1--serif">
                  {book.title}
                </h1>
                <div id="bookAuthors" className="">
                  <span className="by">by </span>
                  <span itemProp="author">
                    <div className="authorName__container">
                      <a
                        className="authorName"
                        itemProp="url"
                        href="https://www.goodreads.com/author/show/1406384.John_Green"
                      >
                        <span itemProp="name">{book.authorName} </span>
                      </a>
                      <span className="greyText">(Goodreads Author)</span>
                    </div>
                  </span>
                </div>
                <div
                  id="bookMeta"
                  className="uitext stacked"
                  style={{ position: "relative" }}
                  itemProp="aggregateRating"
                  itemScope
                >
                  <span className="staticStars stars">
                    <span size="12x12" className="staticStar p10"></span>
                    <span size="12x12" className="staticStar p10"></span>
                    <span size="12x12" className="staticStar p10"></span>
                    <span size="12x12" className="staticStar p10"></span>
                    <span size="12x12" className="staticStar p3"></span>
                  </span>
                  <span itemProp="ratingValue">{book.rating}</span>
                  <span className="greyText">&nbsp;·&nbsp;</span>
                  <a className="gr-hyperlink" href="#other_reviews">
                    3,485,033 ratings
                  </a>
                  <span className="greyText">&nbsp;·&nbsp;</span>
                  <a className="gr-hyperlink" href="#other_reviews">
                    5 reviews
                  </a>
                </div>
                <div id="descriptionContainer">
                  <div id="choiceBadge">
                    <a href="https://www.goodreads.com/choiceawards/best-books-2012">
                      <img
                        src="https://s.gr-assets.com/assets/award/2012/grca_badge_winner-0772ba436306e4f8ffe26579deee1a6c.png"
                        alt="Grca badge winner"
                      />
                    </a>
                  </div>
                  <div
                    id="description"
                    className="readable stacked"
                    style={{ right: "0" }}
                  >
                    <span id="freeTextContainer" style={{ display: "inline" }}>
                      {book.description}
                      <br />
                      <br />
                      "Insightful, bold, irreverent, and raw, The Fault in Our
                      Stars"
                    </span>
                    <span id="freeTextContainer" style={{ display: "none" }}>
                      {book.description}
                    </span>
                  </div>
                </div>
                <div
                  id="buyBookContainer"
                  className="uitext buttons u-marginTopXSmall u-paddingBottomXSmall u-bottomGrayBorder"
                >
                  <div className="u-positionRelative">
                    <h2 className="buyButtonContainer__title u-inlineBlock">
                      GET A COPY
                    </h2>
                  </div>
                  <ul className="buyButtonBar left">
                    <li></li>
                    <li></li>
                    <li>
                      <a
                        className="buttonBar"
                        target="_blank"
                        rel="no_follow noopener noreferrer"
                        href={urlDownload}
                      >
                        Download Excerpt
                      </a>
                    </li>
                  </ul>
                  <div className="clear"></div>
                </div>
                <div id="details" className="uitext darkGreyText">
                  <div className="row">
                    <span itemProp="bookFormat">Hardcover, </span>
                    <span itemProp="numberOfPages">{book.numberOfPages}</span>
                  </div>
                  <div className="row">
                    Published January 10th 2012 by Dutton Books
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clearFloats bigBox">
              <div className="h2Container gradientHeaderContainer">
                <h2 className="brownBackground">
                  <div className="extraHeader">
                    <a className="actionLinkLite" href="/review/edit/11870085">
                      Edit
                    </a>
                  </div>
                  <a href="/review/show/3503902515">My Activity</a>
                </h2>
              </div>
              <div className="bigBoxBody">
                <div className="bigBoxContent containerWithHeaderContent">
                  <table
                    className="myActivity"
                    cellSpacing="1"
                    border="0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td valign="top" className="myActivity__label">
                          Review of
                        </td>
                        <td className="uitext" colSpan="2">
                          <a href="/book/show/11870085-the-fault-in-our-stars">
                            The Fault in Our Stars (Hardcover)
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="myActivity__label">Format</td>
                        <td className="uitext" colSpan="2">
                          <strong>Hardcover</strong>{" "}
                          <a
                            className="gr-metaText"
                            href="/work/editions/16827462"
                          >
                            edit
                          </a>
                        </td>
                      </tr>
                      
                      <tr />
                      <tr />
                      <tr />
                    </tbody>
                  </table>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div id="lazy_loadable_view">
              <div className="clearFloats bigBox">
                <div className="h2Container gradientHeaderContainer">
                  <h2 className="brownBackground">Review</h2>
                </div>
                <div className="bigBoxBody">
                  <div className="bigBoxContent containerWithHeaderContent">
                    <div className="communityQuestionSubTitle communityQuestionPrompt">
                     Review about this book: 
                      <span className="bookLink"> {book.title}</span>
                    </div>
                    <p className="readerQAFormRateLimitMessage js-ReaderQAForm-rateLimitMessage">
                      You’ve asked a lot of questions! To give authors a chance
                      to keep up, we limit members to 10 questions per author
                      per day.
                    </p>
                    <BookComment book={book}/>
                    <div className="elementListBrownSeparator"></div>
                   
                    <div className="clear"></div>
                  </div>
                </div>
                <div className="bigBoxBottom"></div>
              </div>
              <div className="clearFloats biBox"></div>
              <div className="clearFloats bigBox" style={{ height: "220px" }}>
                <div className="h2Container gradientHeaderContainer">
                  <h2 className="brownBackground">
                    <a href="/home">List with This Book</a>
                  </h2>
                </div>
                <BestBookEver />
                <div className="bigBoxBottom"></div>
              </div>
              <div id="other_reviews" className="clearFloats bigBox">
                <div className="h2Container gradientHeaderContainer">
                  <h2 className="brownBackground">Community Reviews </h2>
                </div>
                <ListComment />
                <div className="bigBoxBottom"></div>
              </div>
            </div>
          </div>
          <SideBarRight book={book} />
        </div>
      </div>
    </div>
  );
}
