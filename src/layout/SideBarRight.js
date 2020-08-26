import React from "react";
import { twiligtSrc, hungerSrc, diverScr, prideSrc } from "../constant/index";
import AboutAuthor from "../components/AboutAuthor";
import BookByOtherAuthor from "../components/BookByOtherAuthor";
import VideoBookAuthor from "../components/author/VideoBookAuthor";
const SideBarRight = ({ book }) => {
  return (
    <div className="rightContainer">
      <div className="recommendItBar stacked actionLinkLite">
        <a
          className="recommendBook greyText"
          href="/home"
          data-image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420l/11870085._SY75_.jpg"
        >
          Recommend It
        </a>
        <span className="greyText">&nbsp;|&nbsp;</span>
        <a
          className="greyText"
          href="/book/stats?id=11870085-the-fault-in-our-stars"
        >
          Stats
        </a>
        <span className="greyText">&nbsp;|&nbsp;</span>
        <a
          className="greyText"
          href="/user_status/book/11870085-the-fault-in-our-stars"
        >
          Recent Status Updates
        </a>
      </div>
      <div className="relatedWorks">
        <div className="clearFloats bigBox">
          <div className="h2Container gradientHeaderContainer">
            <h2 className="brownBackground">Readers also enjoyed</h2>
          </div>
          <div className="bigBoxBody">
            <div className="bigBoxContent containerWithHeaderContent">
              <div className="bookCarousel">
                <div className="carouselRow" style={{ width: "3600px" }}>
                  <ul>
                    <li className="cover">
                      <a href="http://localhost:3000/book/details/418651">
                        <img
                          alt="Twilight (Twilight, #1)"
                          src={twiligtSrc}
                        ></img>
                      </a>
                    </li>
                    <li className="cover">
                      <a href="http://localhost:3000/book/details/2767052">
                        <img
                          alt="Twilight (Twilight, #1)"
                          src={hungerSrc}
                        ></img>
                      </a>
                    </li>
                    <li className="cover">
                      <a href="http://localhost:3000/book/details/1885141">
                        <img alt="Twilight (Twilight, #1)" src={diverScr}></img>
                      </a>
                    </li>
                    <li className="cover">
                      <a href="http://localhost:3000/book/details/13335037">
                        <img alt="Twilight (Twilight, #1)" src={prideSrc}></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="actionLink right seeMoreLink"
                href="http://localhost:3000/home"
              >
                See similar books…
              </a>
              <div className="clear"></div>
            </div>
          </div>
          <div className="bigBoxBottom"></div>
        </div>
      </div>
      <div className="stacked">
        <div className="clearFloats bigBox">
          <div className="h2Container gradientHeaderContainer">
            <h2 className="brownBackground">GENRES</h2>
          </div>
          <div className="bigBoxBody">
            <div className="bigBoxContent containerWithHeaderContent">
              <div className="elementList">
                <div className="left">
                  <a
                    className="actionLinkLite bookPageGenreLink"
                    href="/genres/young-adult"
                  >
                    Young Adult
                  </a>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="bigBoxBottom"></div>
        </div>
      </div>
      <AboutAuthor />
      <BookByOtherAuthor />
      <VideoBookAuthor />
      <div className=" clearFloats bigBox">
        <div className="h2Container gradientHeaderContainer">
          <h2 className="brownBackground">
            <a href="/trivia/work/16827462-the-fault-in-our-stars">
              Trivia About The Fault in Our ...
            </a>
          </h2>
        </div>
        <div className="bigBoxBody">
          <div className="bigBoxContent containerWithHeaderContent">
            <div className="mediumText">
              201 trivia questions
              <br />
              31 quizzes
            </div>
            <a
              className="actionLink"
              style={{ float: "right" }}
              href="/trivia/work/16827462-the-fault-in-our-stars"
            >
              More quizzes &amp; trivia...
            </a>
            <div className="clear"></div>
          </div>
        </div>
        <div className="bigBoxBottom"></div>
      </div>
      <div className=" clearFloats bigBox">
        <div className="h2Container gradientHeaderContainer">
          <h2 className="brownBackground">
            <a href="/work/quotes/16827462-the-fault-in-our-stars">
              Quotes from The Fault in Our ...
            </a>
          </h2>
        </div>
        <div className="bigBoxBody">
          <div className="bigBoxContent containerWithHeaderContent">
            <div className="stacked" tyle="padding-bottom:15px">
              <span className="readable">
                “As he read, I fell in love the way you fall asleep: slowly, and
                then all at once.”
              </span>
              <nobr>
                —
                <a
                  className="actionLinkLite"
                  href="/quotes/485442-as-he-read-i-fell-in-love-the-way-you"
                >
                  45240 likes
                </a>
              </nobr>
              <div className="clear"></div>
            </div>
            <div className="stacked" tyle="padding-bottom:15px">
              <span className="readable">
                “My thoughts are stars I cannot fathom into constellations.”
              </span>
              <nobr>
                —
                <a
                  className="actionLinkLite"
                  href="/quotes/485711-my-thoughts-are-stars-i-cannot-fathom-into-constellations"
                >
                  30144 likes
                </a>
              </nobr>
              <div className="clear"></div>
            </div>
            <a
              className="actionLink"
              style={{ float: "right" }}
              href="/work/quotes/16827462-the-fault-in-our-stars"
            >
              More quotes…
            </a>
            <div className="clear"></div>
          </div>
        </div>
        <div className="bigBoxBottom"></div>
      </div>
    </div>
  );
};

export default SideBarRight;
