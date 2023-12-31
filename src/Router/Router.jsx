import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJobs from "../pages/AppliedJobs";
import AddJob from "./../pages/AddJob";
import MyJobs from "./../pages/MyJobs";
import Blogs from "./../pages/Blogs";
import Login from "./../pages/Login";
import Registration from "./../pages/Registration";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Alljobs from "../pages/Alljobs";
import JobDetail from "../pages/JobDetail";
import UpdateJob from "../pages/UpdateJob";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "all-jobs",
        element: <Alljobs />,
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "update-job/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "job-detail/:id",
        element: (
          <PrivateRoute>
            <JobDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);

export default Router;
