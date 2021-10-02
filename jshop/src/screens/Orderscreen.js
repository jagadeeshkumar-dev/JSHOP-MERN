import React from "react";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrdersByUserId } from "../actions/orderActions";

export default function Orderscreen() {
  const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);

  const { orders, error, loading } = orderstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
      console.log(orders)
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2>MY ORDERS</h2>

          <table className="table table-striped table-responsive-sm">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {loading && (<h1>..Loading</h1>) }


              {orders && (orders.map(order=>{
                  return  <tr onClick={()=>{window.location=`/orderinfo/${order._id}`}}> 
                    <td>{order._id}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0,10)}</td>
                  <td>{order.transactionId}</td>
                  <td>
                    {order.isDelivered ? (
                      <p>Delivered</p>
                    ) : (
                      <p>Order placed</p>
                    )}
                  </td>
                  </tr>
                   
                  
                

              }))}
             

              {error && <h1>something went wrong</h1>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
