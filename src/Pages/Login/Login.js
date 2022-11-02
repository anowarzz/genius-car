import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const Login = () => {


const handleLogin = (event) => {
    event.preventDefault();


}


  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} className="w-3/4" alt="" />
        </div>
        <div className="card  w-full border border-gray-200 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="text"
                placeholder="Your Password"
                className="input input-bordered"
              />
            </div>
            <div className="text-end my-5">
            <label className="">
              <Link
                to="/"
                alt=""
                className="label-text-alt link link-hover text-center"
              >
                Forgot password?
              </Link>
            </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-brightRed border-none"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
