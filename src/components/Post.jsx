import React from "react";
import "../App.css";

const Post = () => {
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/19860798/pexels-photo-19860798/free-photo-of-stream-on-rocks-in-winter.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTilte"> loahahhaadddgd</span>
          <hr />
          <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="desc">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset
        </p>
      </div>
    </>
  );
};

export default Post;
