import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+9 0505 334 34 22</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Turkey</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title="User spending.." className="chart" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List className="list" />
        </div>
      </div>
    </div>
  );
};

export default Single;
