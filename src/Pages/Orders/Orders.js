import React, { useContext, useEffect, useState } from 'react';
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


console.log(orders);


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
        />)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;