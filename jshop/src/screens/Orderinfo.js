import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";

export default function Orderinfo({ match }) {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getOrderByIdReducer);

  const { order, Loading, error } = orderState;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);
  return (
    <div>
      {error && <h1>something wrong</h1>}
      {Loading && <h1>Loading.....</h1>}

      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card">
              <h2>Items In Your Order</h2>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div>
                    <h4>{item.name}</h4>
                    <h4>
                      Quantity :<b>{item.quantity}</b>
                    </h4>

                    <h4>
                      Price : {item.quantity}*{item.price}={" "}
                      {item.price * item.quantity}
                    </h4>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 card">
              <h2>Order Details</h2>

              <hr />

              <h3>Order Id : {order._id}</h3>
              <h3>Total Amount : {order.orderAmount}</h3>
              <h3>Date Of order : {order.createdAt.substring(0, 10)}</h3>
              <h3>Transaction ID : {order.transactionId}</h3>

              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}

              <hr />

              <div className="text-right">
                <h3>Shipping Details</h3>

                <hr />

                <h3 className="text-right">
                  Address : <b>{order.shippingAddress.address}</b>
                </h3>
                <h3 className="text-right">
                  City : <b>{order.shippingAddress.city}</b>
                </h3>

                <h3 className="text-right">
                  Country : <b>{order.shippingAddress.country}</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
