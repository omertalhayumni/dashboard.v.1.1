import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatIcon from "@mui/icons-material/Chat";
import ListIcon from "@mui/icons-material/List";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="searchBar" type="text" placeholder="Search...." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://secure.gravatar.com/avatar/d6fd6bff19d7f0ad4024f3811474fe92?s=180&d=mm&r=g"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
