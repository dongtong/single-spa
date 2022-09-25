import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <div>
        <Link to="/react-01">React App 1</Link>
        <Link to="/react-02">React App 2</Link>
      </div>
    </BrowserRouter>
  );
}
