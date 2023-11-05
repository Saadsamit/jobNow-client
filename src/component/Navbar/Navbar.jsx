import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/logo.png";
const Navbar = () => {
  //Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile
  //
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/applied-jobs">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/add-job">Add A Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-jobs">My Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div id="navBar" className="navbar max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link href="/">
          <img src={navLogo} alt="" className="sm:w-[150px] w-[120px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
