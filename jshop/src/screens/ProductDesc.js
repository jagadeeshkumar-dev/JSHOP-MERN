import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getProductByIdReducer } from "../reducers/productReducer";
import {getProductById} from "../actions/productActions"
import {addToCart} from '../actions/cartActions'

function ProductDesc({ match }) {

  const productid = match.params.id;
  const dispatch = useDispatch();

  const getproductidstate = useSelector((state) => state.getProductByIdReducer);
  const { product, loading, error } = getproductidstate;

  const [quantity,setquantity]=useState(1)
  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  function addtocart(){

dispatch(addToCart(product,quantity))

  }

  return (
    <div className="container desc">
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>OOps....</h1>
      ) : (
        <div className="row">
          <div className="col-lg-5 card">
            <img
              src={product.image}
              class="card-img-top img-responsive"
              alt="product"
            />
            <h6>{product.description}</h6>
          </div>

          <div className="col-lg-7">
            <h3> {product.name}</h3>
            <h3> Price : {product.price}/-</h3>
            Select Quantity{" "}
            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}} className="select">
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button onClick={addtocart} className="btn btn-dark">ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDesc;
