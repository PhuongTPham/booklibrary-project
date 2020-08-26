import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import * as BookAPI from "../utils/apiURLs";

const ListComment = () => {
  const [comments, setAllComments] = useState([]);
  const getComments = () => {
    BookAPI.getAllComment().then((res) => setAllComments(res));
  };

  useEffect(() => {
    getComments();
  }, [comments]);
  return (
    <div className="bigBoxBody">
      <div className="bigBoxContent containerWithHeaderContent">
        <div className="reviews">
          <div className="bookReviewsPaginationCount">
            <span className="smallText">Showing1-10</span>
          </div>
          <div
            id="reviewControls"
            className="reviewControls u-defaultType clearFix"
          ></div>
          {comments.length !== 0
            ? comments.map((comment) => {
                return (
                  <div id="bookReviews" key={comment.id}>
                    <div className="friendReviews elementListBrown">
                      <div className="section firstReview">
                        <div
                          className="review"
                          itemProp="reviews"
                          itemScope
                          itemType="http://schema.org/Review"
                        >
                          <link
                            itemProp="url"
                            href="https://www.goodreads.com/review/show/468815437"
                          ></link>
                          <a
                            title="Richa"
                            className="left imgcol"
                            href="/user/show/2796667-richa"
                          >
                            <img
                              alt="Richa"
                              src="https://images.gr-assets.com/users/1354430575p2/2796667.jpg"
                            />
                          </a>
                          <div className="left bodycol">
                            <div className="reviewHeader uitext stacked">
                              <a
                                className="reviewDate createdAt right"
                                href="/review/show/468815437?book_show_action=true"
                              >
                                Dec 03, 2012
                              </a>
                              <span
                                itemProp="author"
                                itemScope=""
                                itemType="http://schema.org/Person"
                              >
                                <a
                                  title="Richa"
                                  className="user"
                                  itemProp="url"
                                  name="Richa"
                                  href="/user/show/2796667-richa"
                                >
                                  {comment.idUser}{" "}
                                </a>
                              </span>&nbsp;·&nbsp;
                               rate it
                              <span className="staticStars">
                                <Rate
                                    defaultValue={comment.rating}
                                  style={{
                                    fontSize: "12px",
                                    marginLeft: "10px",
                                  }}
                                />
                              </span>
                            </div>
                            <div className="reviewText stacked">
                              <span id="freeTextContainer" className="readable">
                                <span id="freeText">{comment.body}</span>
                              </span>
                            </div>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : 0}
        </div>
      </div>
    </div>
  );
};

export default ListComment;
