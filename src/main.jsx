import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Authprovider from "./Authprovider.jsx";
import { RouterProvider } from "react-router-dom";
import Router from './Router/Router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Authprovider>
      <RouterProvider router={Router}/>
    </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>
);
