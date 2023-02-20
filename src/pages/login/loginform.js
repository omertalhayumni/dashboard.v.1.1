import React from "react";
import { Link } from "react-router-dom";
import "./loginform.css";

const loginform = () => {
  return (
    <div className="login">
      <h1>merhaba</h1>
      <Link to="/dashboard">
        <h2>Hoş Geldiniz...</h2>
      </Link>
    </div>
  );
};

export default loginform;
