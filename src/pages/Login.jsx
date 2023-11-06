import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  return (
    <div className="min-h-screen max-w-[1200px] mx-auto">
      <div className="hero-content flex-col">
        <h1 className="text-[#0B666A] text-center capitalize py-6 font-bold text-4xl">
          login now
        </h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-[#0B666A] bg-base-100">
          <form className="card-body">
            <button
              type="button"
              className="py-2 mb-2 border-2 border-[#0B666A] rounded-xl w-full"
            >
              <div className="flex justify-center text-[#0B666A] items-center text-lg hover:underline">
                <FcGoogle className="text-2xl mr-1" />
                Sign up with google
              </div>
            </button>
            <div className="flex justify-around items-center px-4">
                <div className="bg-[#0B666A] h-[2px] w-2/5"></div>
                <p className="text-center">or</p>
                <div className="bg-[#0B666A] h-0.5 w-2/5"></div>
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
                  className="absolute top-1/2 text-[#0B666A] cursor-pointer -translate-y-1/2 text-xl right-2"
                >
                  {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-[#0B666A] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">
                Login
              </button>
            </div>
            <p>
              {"If You Don't Have Account"}{" "}
              <Link to="/registration" className="text-[#0B666A] link-hover">
                Registrar
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
