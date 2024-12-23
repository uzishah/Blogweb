import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";
const navigate = useNavigate();
import "../App.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <FaFacebookSquare className="topIcon" />
          <FaTwitterSquare className="topIcon" />
          <FaInstagramSquare className="topIcon" />
          <FaPinterestSquare className="topIcon" />
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/"}>
                About
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/"}>
                Contact
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/"}>
                Write
              </Link>
            </li>
            <li className="topListItem"> {user && "Logout"}</li>
          </ul>
        </div>

        <div className="topLeft">
          {user ? (
            <img
              className="topImage"
              src="https://picsum.photos/id/0/367/267"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem link">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="topListItem link">
                <Link className="link" to="/signup">
                  Register
                </Link>
              </li>
            </ul>
          )}
          <FaSearch className="topSearchIcon" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
