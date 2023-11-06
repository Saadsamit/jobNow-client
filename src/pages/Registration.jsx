import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { contextProvider } from "../Authprovider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import toast from "react-hot-toast";

const Registration = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  const { createUser,logout,myTheme } = useContext(contextProvider);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photourl.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const toastLoading = toast.loading("login in processing", myTheme);
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters",{ ...myTheme, id: toastLoading });
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.error("Password must be at least 1 capital letter",{ ...myTheme, id: toastLoading });
        return;
      } else if (!/[!\@\#\$\%\^\&\*\)\(\+\=\.\_\-]/.test(password)) {
        toast.error("Password must be at least 1 special character",{ ...myTheme, id: toastLoading });
        return;
      }
    createUser(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
    }).then(()=>{
        logout()
    }).then(()=>{
        toast.success("Registration Successfull", { ...myTheme, id: toastLoading })
    }).catch((error)=>{
        const errorMessage = error?.message
        ?.replace("Firebase: Error (", "")
        ?.replace(")", "");
        toast.error(errorMessage, { ...myTheme, id: toastLoading });
    })
    form.reset()
  };
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <div className="hero-content flex-col">
        <h1 className="text-[#0B666A] text-center capitalize py-6 font-bold text-4xl">
          Registration now
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-[#0B666A] bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="PhotoURL">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photourl"
                id="PhotoURL"
                placeholder="Photo URL"
                className="input input-bordered border-[#0B666A] focus:outline-[#0B666A]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input input-bordered border-[#0B666A] focus:outline-[#0B666A]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input input-bordered border-[#0B666A] focus:outline-[#0B666A]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text capitalize ps-2 text-[#0B666A]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={passwordShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="input input-bordered border-[#0B666A] focus:outline-[#0B666A] w-full"
                  required
                />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="absolute top-1/2 cursor-pointer text-[#0B666A] -translate-y-1/2 text-xl right-2"
                >
                  {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">
                Login
              </button>
            </div>
            <p>
              If You Have A Account{" "}
              <Link to="/login" className="text-[#0B666A] link-hover">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
