import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/logo.png";
import { useContext } from "react";
import { contextProvider } from "../../Authprovider";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logout, myTheme } = useContext(contextProvider);
  const handleLogout = () => {
    const toastLoading = toast.loading("login in processing", myTheme);
    logout()
      .then(() => {
        toast.success("Login Successfull", { ...myTheme, id: toastLoading });
      })
      .catch((error) => {
        const errorMessage = error?.message
          ?.replace("Firebase: Error (", "")
          ?.replace(")", "");
        toast.error(errorMessage, { ...myTheme, id: toastLoading });
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-jobs">All Jobs</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/applied-jobs">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/add-job">Add A Job</NavLink>
          </li>
          <li>
            <NavLink to="/my-jobs">My Jobs</NavLink>
          </li>
        </>
      ) : null}
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
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <CgProfile className="text-2xl"></CgProfile>
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
