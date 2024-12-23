import React from "react";
import "../App.css";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarItem">
          <span className="sideBarTitle">About Me</span>
          <img src="https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&w=400" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className="sideBarItem">
          <span>CATEGORIES</span>
          <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Sports</li>
            <li className="sideBarListItem">Games</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Tech</li>
          </ul>
        </div>
        <div className="sideBarItem">
          <span>FOLLOW US</span>
          <ul className="SocialIcon">
            <div className="topLeft">
              <FaFacebookSquare className="SideBarIcon" />
              <FaTwitterSquare className="SideBarIcon" />
              <FaInstagramSquare className="SideBarIcon" />
              <FaPinterestSquare className="SideBarIcon" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
