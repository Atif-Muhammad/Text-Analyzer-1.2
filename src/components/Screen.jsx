import React from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Main from "./Main";
export default function Screen() {
  return (
    <div className="d-flex flex-column align-items-center vh-100">
      <Navbar />
      <Alert />
      <Main />
    </div>
  );
}
