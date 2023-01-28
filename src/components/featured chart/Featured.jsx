import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$3424</p>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="itemAmount">$15.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small" />
              <div className="itemAmount">$2.4k</div>
            </div>
          </div>{" "}
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small" />
              <div className="itemAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
