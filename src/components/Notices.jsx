import React from "react";
import "../assets/css/Notices.css";

export const Notices = () => {
  return (
    <div className="notices__global">
      <div className="notices__scrollable">
        <div className="notice">
          <h1>Post 1</h1>
        </div>
        <div className="notice">
          <h1>Post 2</h1>
        </div>
        <div className="notice">
          <h1>Post 3</h1>
        </div>
        <div className="notice">
          <h1>Post 4</h1>
        </div>
      </div>
    </div>
  );
};
