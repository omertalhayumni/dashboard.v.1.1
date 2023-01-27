import React from "react";
import "./widget.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const Widget = ({ type }) => {
  let data;
  //temporary
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        link: "View all users",
      };
      break;
    case "carts":
      data = {
        title: "Carts",
        isMoney: false,
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        link: "View all carts.",
      };
      break;
    case "earning":
      data = {
        title: "Earnings",
        isMoney: true,
        icon: (
          <PaymentsIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
        link: "View net earnings.",
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        link: "See details",
      };
      break;

    default:
      break;
  }

  return (
    <div className="widgets">
      <div className="left">
        <span className="title"> {data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
