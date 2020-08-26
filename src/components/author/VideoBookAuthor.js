import React from "react";

const VideoBookAuthor = () => {
  return (
    <div id="videos" className=" clearFloats bigBox">
      <div className="h2Container gradientHeaderContainer">
        <h2 className="brownBackground">
          <a href="/videos/list_author/1406384.John_Green">
            Videos About This Book
          </a>
        </h2>
      </div>
      <div className="bigBoxBody">
        <div className="bigBoxContent containerWithHeaderContent">
          <div className="elementList" style={{width: "100%", borderBottom: "none"}}>
            <div style={{float: "left", paddingRight: "10px", width: "290px"}}>
              <div
                className="videoThumbnail"
                data-source="youtube"
                data-width="290"
                data-height="163"
              >
                <a href="https://www.goodreads.com/videos/58772-the-fault-in-our-stars-official-trailer">
                  <img
                  style={{maxWidth: "290px"}}
                    width="290"
                    height="163"
                    alt="The Fault In Our Stars (Official Trailer) "
                    src="https://i.ytimg.com/vi/9ItBvH5J6ss/mqdefault.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="clear"></div>
            <div className="clear"></div>
          </div>
         
          <div className="moreLink">
            <a className="actionLink" href="/videos/list_author/1406384.John_Green">
              More videos...
            </a>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="bigBoxBottom"></div>
    </div>
  );
};

export default VideoBookAuthor;
