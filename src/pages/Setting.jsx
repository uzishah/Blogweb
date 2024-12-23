import { FaUserCircle } from "react-icons/fa";
import "../App.css";
import SideBar from "../components/SideBar";
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="updateTitle"> Update Your Account</span>
          <span className="dltTitle"> Delete Your Account</span>
        </div>
        <form className="SettingForm">
          <label>Profile Picture</label>
          <div className="profileSetting">
            <img src="https://images.pexels.com/photos/13452113/pexels-photo-13452113.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <label htmlFor="pfileInput">
              <FaUserCircle className="profileIcon" />
            </label>
            <input type="file" id="pfileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="john doe" />
          <label>Email</label>
          <input type="email" placeholder="johndoe@gmail.comm" />
          <label>Username</label>
          <input type="password" placeholder="Enter your Password" />
          <button className="submitSetting"> Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Setting;
