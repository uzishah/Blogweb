import React from "react";
import "../App.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesSm">React & Node</span>
          <span className="headerTitlesLg"> Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
      </div>
    </>
  );
};

export default Header;
