import React from "react";
import {hungerSrc, harrySrc, killSrc, prideSrc} from "../constant/index";

const BestBookEver = () => {
  return (
    <div className="bigBoxBody">
      <div className="bigBoxContent containerWithHeaderContent">
        <div className="listRowsFull">
          <div className="row" id="topRow">
            <div className="cell">
              <div className="listImgs">
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="The Hunger Games by Suzanne Collins"
                    title="The Hunger Games by Suzanne Collins"
                    src={hungerSrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="Harry Potter and the Order of the Phoenix by J.K. Rowling"
                    title="Harry Potter and the Order of the Phoenix by J.K. Rowling"
                    src={harrySrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="To Kill a Mockingbird by Harper Lee"
                    title="To Kill a Mockingbird by Harper Lee"
                    src={killSrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="Pride and Prejudice by Jane Austen"
                    title="Pride and Prejudice by Jane Austen"
                    src={prideSrc}
                  />
                </a>
                 <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="To Kill a Mockingbird by Harper Lee"
                    title="To Kill a Mockingbird by Harper Lee"
                    src={killSrc}
                  />
                </a>
              </div>
              <a className="listTitle" href="/list/show/1.Best_Books_Ever">
                Best Books Ever
              </a>
              <br />
              <div className="listFullDetails">51,210 books — 200,795 voters</div>
            </div>
            <div className="cell">
                <div className="listImgs">
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="The Hunger Games by Suzanne Collins"
                    title="The Hunger Games by Suzanne Collins"
                    src={hungerSrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="Harry Potter and the Order of the Phoenix by J.K. Rowling"
                    title="Harry Potter and the Order of the Phoenix by J.K. Rowling"
                    src={harrySrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="To Kill a Mockingbird by Harper Lee"
                    title="To Kill a Mockingbird by Harper Lee"
                    src={killSrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="Pride and Prejudice by Jane Austen"
                    title="Pride and Prejudice by Jane Austen"
                    src={prideSrc}
                  />
                </a>
                <a href="/list/show/1.Best_Books_Ever">
                  <img
                    alt="Pride and Prejudice by Jane Austen"
                    title="Pride and Prejudice by Jane Austen"
                    src={prideSrc}
                  />
                </a>
              </div>
                <a className="listTitle" href="/list/show/43.Best_Young_Adult_Books">Best Young Adult Books</a>
                <br/>
                <div className="listFullDetails"> 11,332 books — 79,594 voters</div>
            </div>
          </div>
        </div>
        <br className="clear"></br>
        <br className="clear"></br>
        <a className="actionLink" style={{float:"right"}} href="/list/book/11870085">More lists with this book...</a>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default BestBookEver;
