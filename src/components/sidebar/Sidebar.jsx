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
import { useState } from "react";
const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);aaaa
  const [isExpanded, setExpendState] = useState(true);

  return (
    <div className={isExpanded ? "sidebar" : "sidebar side-nav-container-NX"}>
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className={isExpanded ? "logo" : "logo logo-NX"}>
            Dashboard
          </span>
        </Link>
      </div>
      <button
        className={
          isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
        }
        onClick={() => setExpendState(!isExpanded)}
      >
        <div className="spann">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <hr />
      <div className="center">
        <ul>
          <ul>
            <p className={isExpanded ? "title" : "title title-NX"}>Main</p>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span className={isExpanded ? "button" : "button button-NX"}>
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PeopleAltIcon className="icon" />
                <span className={isExpanded ? "button" : "button button-NX"}>
                  Users
                </span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <StorefrontIcon className="icon" />
                <span className={isExpanded ? "button" : "button button-NX"}>
                  Products
                </span>
              </li>
            </Link>
            <Link to="/carts" style={{ textDecoration: "none" }}>
              <li>
                <ShoppingCartIcon className="icon" />
                <span className={isExpanded ? "button" : "button button-NX"}>
                  Carts
                </span>
              </li>
            </Link>

            <p className={isExpanded ? "title" : "title title-NX"}>Useful </p>
            <li>
              <StackedBarChartIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Stats
              </span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Notification
              </span>
            </li>
            {/* <p className="title">Service </p>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li> */}
            <p className={isExpanded ? "title" : "title title-NX"}>User </p>

            <li>
              <AccountBoxIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Profile
              </span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Logout
              </span>
            </li>
          </ul>
          <p className={isExpanded ? "title" : "title title-NX"}>Main</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Dashboard
              </span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Users
              </span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Products
              </span>
            </li>
          </Link>
          <Link to="/carts" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="icon" />
              <span className={isExpanded ? "button" : "button button-NX"}>
                Carts
              </span>
            </li>
          </Link>
          <p className={isExpanded ? "title" : "title title-NX"}>Useful </p>
          <li>
            <StackedBarChartIcon className="icon" />
            <span className={isExpanded ? "button" : "button button-NX"}>
              Stats
            </span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span className={isExpanded ? "button" : "button button-NX"}>
              Notification
            </span>
          </li>
          {/* <p className="title">Service </p>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className={isExpanded ? "title" : "title title-NX"}>User </p>
          <li>
            <AccountBoxIcon className="icon" />
            <span className={isExpanded ? "button" : "button button-NX"}>
              Profile
            </span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span className={isExpanded ? "button" : "button button-NX"}>
              Logout
            </span>
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
