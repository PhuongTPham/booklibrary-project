import React from "react";
import Disqus from "disqus-react";

function dipusComment() {
  const dispusShortName = "bookstore-project";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article",
  };

  return (
    <div className="article-container">
      <Disqus.DiscussionEmbed
        shortname={dispusShortName}
        config={disqusConfig}
      />
    </div>
  );
}
export default dipusComment;
