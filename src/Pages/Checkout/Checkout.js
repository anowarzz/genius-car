import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Checkout = () => {
  const {_id,  title, price } = useLoaderData();

  const { user } = useContext(AuthContext);


const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email  = user?.email || "Unregistered"
        const phone = form.phone.value;
        const message = form.message.value;


    const order = {
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone,
        message
    }
    if(phone.length < 10){
       toast.error("Phone Number Is Not Valid")
        return;
    }
    
   
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        if(data.acknowledged){
            toast.success("Order Placed Succesfully")
            form.reset();
        }
    })
    .catch(err => console.error(err))

   
    

} 


  return (
    <div>
      <div className=" bg-gray-100">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-center pt-10">
            <span className="text-brightRed  border-brightRed border p-1 md:px-2">
              {title}
            </span>
          </h2>
          <h3 className="text-xl text-brightRed font-semibold mt-4 text-center">
            <span className="border-b px-2 border-brightRed">
              Price : ${price}
            </span>
          </h3>
          <p className="text-center mt-3 md:mt-6">
            Please Provide Your Details
          </p>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-3  p-20">
            <input 
              type="text" name="firstName"
              placeholder="First Name"
              className="input input-bordered md:w-3/5"
            />
            <input
              type="text" name="lastName"
              placeholder="Last Name"
              className="input input-bordered md:w-3/5"
            />
            <input
              type="text" name="phone"
              placeholder="Phone Number" required 
              className="input input-bordered md:w-3/5"
            />
            <input
              type="email" name="email"
              placeholder="Email"
              className="input input-bordered md:w-3/5 mb-12"
              defaultValue={user?.email}
              readOnly
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <textarea name="message"
              className="textarea textarea-bordered h-24 w-3/5 text-center"
              placeholder="Your Message"
            ></textarea>

            <input
              type="submit"
              value="Place Order"
              className="btn bg-brightRed my-8 border-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
