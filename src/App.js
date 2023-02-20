import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import Login from "./pages/login/loginform";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userID" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productID" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
