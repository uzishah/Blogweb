import React from "react";
import { FaPlus } from "react-icons/fa";

const WritePage = () => {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://images.pexels.com/photos/12772295/pexels-photo-12772295.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <form className="writeForm">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <FaPlus className="formIcon" />
          </label>
          <input
            type="file"
            id="fileInput"
            className="writeInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className=" formGroup">
          <textarea
            className="writeInput text"
            placeholder="Tell Me Your Story............"
          ></textarea>
        </div>
        <button className="SubmitBtn">Publish</button>
      </form>
    </div>
  );
};

export default WritePage;
