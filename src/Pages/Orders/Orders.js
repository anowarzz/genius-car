import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const Orders = () => {


const {user} = useContext(AuthContext)
const [orders, setOrder] = useState([])


useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setOrder(data))
}, [user?.email])

const handleDelete = id => {
    
      
  const proceed = window.confirm("Are you sure, you want to cancel this order");
  if(proceed){
   
       fetch(`http://localhost:5000/orders/${id}`, {
          method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
          console.log(data); 

          if(data.deletedCount > 0){
            toast.success("Deleted Successfully")
            const remaining =  orders.filter(odr => odr._id !== id)
            setOrder(remaining)
          }
       })
  }  
}


    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center">
                You Have {orders.length} Orders
            </h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Details</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>

    {
        orders.map(order => <OrderRow 
        key={order._id}
        order = {order}
        handleDelete = {handleDelete}
        />)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;