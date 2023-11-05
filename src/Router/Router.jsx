import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJobs from "../pages/AppliedJobs";
import AddJob from "./../pages/AddJob";
import MyJobs from "./../pages/MyJobs";
import Blogs from "./../pages/Blogs";
import Login from './../pages/Login';
import Registration from './../pages/Registration';
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "my-jobs",
        element: <MyJobs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: 'Registration',
    element: <Registration/>
  }
]);

export default Router;
