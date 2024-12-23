import "../App.css";
import Blog from "../components/Blog";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  return (
    <>
      <div className="single">
        <Blog />
        <SideBar />
      </div>
    </>
  );
};

export default SingleBlog;
