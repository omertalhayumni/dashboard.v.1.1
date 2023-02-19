import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/carts" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="icon" />
              <span>Carts</span>
            </li>
          </Link>
          <li></li>
          <p className="title">Useful </p>
          <li>
            <StackedBarChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          {/* <p className="title">Service </p>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">User </p>

          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "Dark" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
