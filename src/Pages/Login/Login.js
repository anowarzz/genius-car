import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {

  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // Context
  const {login, passwordChange} = useContext(AuthContext)
// states
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  
  // location  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/' ;

  // Login Handler
const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setEmail(email)
 

    login(email, password)
    .then(result => {
     const user = result.user;
     

      const currentUser = {
        email: user.email
      } 

      console.log(currentUser);
      
      // Get jwt token
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        // Local storage is the easiest but not the best place to store JWT token 
        localStorage.setItem('genius-token', data.token);
        
      navigate(from, {replace: true})
      form.reset();
      toast.success("Login Successful")
      })
    })
    .catch(err => setError(err.message))
}

const handlePasswordChange = () => {
  
  
// if((!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){
//   return toast.error("Please Enter A Valid Email")
// }

//   else{

//     passwordChange(email)
//     toast.success("Password Reset Email Send")
//   }
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
                to=""
                alt=""
                className="label-text-alt  text-center"
              >
                <button onClick={handlePasswordChange} className="hover:link">Forgot password?</button>
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
