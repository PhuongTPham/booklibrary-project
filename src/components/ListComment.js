import React from "react";
import { Rate } from "antd";

const ListComment = () => {

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
                    <div id="bookReviews">
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
                                    <a title="Richa" className="left imgcol" href="/user/show/2796667-richa">
                                        <img alt="Richa" src="https://images.gr-assets.com/users/1354430575p2/2796667.jpg" />
                                    </a>
                                    <div className="left bodycol">
                                        <div className="reviewHeader uitext stacked">
                                            <a className="reviewDate createdAt right" href="/review/show/468815437?book_show_action=true">Dec 03, 2012</a>
                                            <span itemProp="author" itemScope="" itemType="http://schema.org/Person">
                                                <a title="Richa" className="user" itemProp="url" name="Richa" href="/user/show/2796667-richa">Phuong </a>
                                            </span>
                                            rate it
                                            <span className="staticStars">
                                                <Rate style={{ fontSize: "12px", marginLeft: "10px" }} />
                                            </span>
                                        </div>
                                        <div className="reviewText stacked">
                                            <span id="freeTextContainer" className="readable">
                                                <span id="freeText"></span>
                                            </span>
                                        </div>
                                        <div className="reviewFooter uitext buttons">
                                            <div className="updateActionLinks">
                                                <span className="likeItContainer" id="like_container_review_468815437">
                                                    <a id="like_count_review_468815437" rel="nofollow" href="/rating/voters/468815437?resource_type=Review">
                                                        <span className="likesCount">1876 likes</span>
                                                    </a>&nbsp;·&nbsp;
                                                    <span className="loadingLinkSpan">
                                                        <a id="like_action_review_468815437" href="/home" className="jsLike like_it gr-button gr-button--small loadingLink">
                                                            Like
                                                        </a>
                                                    </span>
                                                </span>&nbsp;·&nbsp;
                                                <a id="commentLink" href="/home" >362 comments</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListComment;
