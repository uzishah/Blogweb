import { FaEdit, FaTrash } from "react-icons/fa";
import "../App.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blogWraper">
        <img
          className="blogImg"
          src="https://images.pexels.com/photos/1165982/pexels-photo-1165982.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <h1 className="blogTitle">
          lotrehsssssssssssssssssdfbfvbv
          <div className="iconDiv">
            <FaEdit className="blogIcon" /> <FaTrash className="blogIcon" />
          </div>
        </h1>
        <div className="blogInfo">
          <span className="blogAuthor">
            Author: <b>Uzair Shah</b>
          </span>
          <span className="blogDate">
            Date: <b>1 Hour ago</b>
          </span>
        </div>
        <p className="blogDes">
          loream hdh ytssksbled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose njected humour and the lik
        </p>
      </div>
    </div>
  );
};

export default Blog;
