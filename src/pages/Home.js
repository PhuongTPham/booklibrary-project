import React from "react";
import List from "./List";

function Home() {
  return (
      <div className="mainContentContainer">
        <div className="gcaMasthead__container gcaMasthead__container--current">
          <header className="gcaMasthead">
            <div className="gcaMasthead__content">
              <div className="gcaMasthead__logo gcaMasthead__logo--current"></div>
              <div className="gcaMasthead__body">
                <div className="gcaMasthead__topbar">
                  <div className="gcaMasthead__topbarBox gcaMasthead__topbarBox--votesCast">
                    <div className="gcaMasthead__subheader">Votes Cast:</div>
                    <i>4,659,701</i>
                  </div>
                </div>
                <div className="gcaMasthead__title gcaMasthead__title--current">
                  LIBRARY BOOK
                </div>
                <div className="gcaMasthead__description gcaMasthead__description--current">
                  <span>
                    Life is like a book. There are good chapters, and there are
                    bad chapters. But when you get to a bad chapter, you don’t
                    stop reading the book! If you do… then you never get to !”
                  </span>
                </div>
                <div className="gcaMasthead__ctaButtonContainer gcaMasthead__ctaButtonContainer--current">
                  <a
                    className="gcaButton gcaButton--masthead gcaButton--tall"
                    href="http://localhost:3000/home"
                  >
                    View books
                  </a>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </header>
        </div>
        <div className="mainContent">
          <div className="mainContentFloat ">
            <div id="flashContainer"></div>
            <div id="landingCenter">
              <div id="landingAdContainer">
                <div>
                  <div
                    className="googleBannerAd"
                    id="div-gpt-ad-goodr-gca-home-160x600"
                    style={{ width: "160px", height: "auto", display: "none" }}
                  ></div>
                </div>
              </div>
              <List />
              <div id="landingRight">
                <div className="gcaSidebarItem" id="choiceTalk">
                  <h3 className="gr-h3">Choice Chatter</h3>
                  <dl>
                    <dt>
                      <a
                        className="gcaLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.oprahmag.com/entertainment/books/g30168769/goodreads-choice-awards-best-books-2019/"
                      >
                        The 20 Best Books of 2019, According to the Goodreads
                        Choice Awards
                      </a>
                    </dt>
                    <dd>www.oprahmag.com</dd>
                    <dt>
                      <a
                        className="gcaLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.buzzfeednews.com/article/ariannarebolini/winners-goodreads-best-books-2019"
                      >
                        Here Are The Winners Of The 2019 Goodreads Choice Awards
                      </a>
                    </dt>
                    <dd>www.buzzfeed.com</dd>
                    <dt>
                      <a
                        className="gcaLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.today.com/shop/best-books-2019-according-goodreads-readers-t169539"
                      >
                        These Are the Top 20 Books of 2019, According to
                        Goodreads Users
                      </a>
                    </dt>
                    <dd>www.today.com</dd>
                  </dl>
                  <a
                    className="gcaMoreLink"
                    href="/choiceawards/2019/choice_chatter"
                  >
                    <div className="more">More Chatter...</div>
                  </a>
                </div>
                <div className="gcaSidebarItem" id="bestOf">
                  <h3 className="gr-h3">“Best Of” Lists</h3>
                  <div className="u-marginBottomSmall">
                    <a
                      target="_blank"
                      className="gcaLink"
                      rel="noopener noreferrer"
                      href="https://www.amazon.com/b?ie=UTF8&amp;node=17276804011"
                    >
                      Amazon Editors' Best Books of 2019
                    </a>
                  </div>
                  <a className="gcaMoreLink" href="/choiceawards/2019/best_of">
                    <div className="more">More Lists...</div>
                  </a>
                </div>
                <div className="gcaSidebarItem" id="previousYears">
                  <h3 className="gr-h3">Categories</h3>
                  <ul className="noListStyle">
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2018"
                      >
                       Fiction
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2017"
                      >
                        Romance
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2016"
                      >
                        Young
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2015"
                      >
                        Fantasy
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2014"
                      >
                        Science Fiction
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2013"
                      >
                       Humor
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2012"
                      >
                       Nonfiction
                      </a>
                    </li>
                    <li>
                      <a
                        className="previousYears__link"
                        href="/choiceawards/best-books-2011"
                      >
                       Poetry
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
  );
}

export default Home;
