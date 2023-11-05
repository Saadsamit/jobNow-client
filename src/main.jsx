import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Authprovider from "./Authprovider.jsx";
import { RouterProvider } from "react-router-dom";
import Router from './Router/Router';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={Router}/>
    </Authprovider>
  </React.StrictMode>
);
