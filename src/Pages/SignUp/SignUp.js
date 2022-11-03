import {React, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link,  useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import {AuthContext} from '../../context/AuthProvider/AuthProvider'

const SignUp = () => {

const {createUser} = useContext(AuthContext)
const [error, setError] = useState('')


const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success("Registration Successful")
            navigate('/')

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
          <h1 className="text-3xl md:text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">


            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input name='name'  
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name='email' 
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered" required
              />
            </div>

           

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input name='password' 
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered" required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input name='confirm' 
                type="password"
                placeholder="Confirm Your Password"
                className="input input-bordered" required
              />
            </div>
            { 
              error &&
              <p className="text-brightRed font-bold text-center mb-3">{error}</p>
            }
            <div className="form-control mt-6">
              <input
                className="btn bg-brightRed border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">Already Have An Account ? <Link to='/login' className="text-brightRed font-bold hover:link pl-3">
         Login</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;