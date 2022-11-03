import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {

  const {login} = useContext(AuthContext)

  const [error, setError] = useState('')


const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;



    login(email, password)
    .then(result => {
     const user = result.user;
      console.log(user);
      form.reset();
      toast.success("Login Successful")
    })
    .catch(err => setError(err.message))


}


  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} className="w-3/4" alt="" />
        </div>
        <div className="card py-20 w-full border border-gray-200 shadow-md">
          <h1 className="text-3xl md:text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name="email" 
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input name="password" 
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
            </div>
           
            <div className="text-end mt-5">
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
            { 
              error &&
              <p className="text-brightRed font-bold text-center mb-3">{error}</p>
            }
            <div className="form-control mt-6">
              <input
                className="btn bg-brightRed border-none"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          
          <p className="text-center">New To Genius Car ? <Link to='/signup' className="text-brightRed font-bold hover:link pl-3">
         Sign Up </Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
