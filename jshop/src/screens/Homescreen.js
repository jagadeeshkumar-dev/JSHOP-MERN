import React, { useState, useEffect } from "react";

import Product from "../components/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Filter from "../components/Filter";

function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getallproductsstate;
  //const [products, setproducts] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter/>
 <div className="row justify-content-center mt-5">
      {
        loading ? (
          <h1>Loading.....</h1>
        ) : error ? (
          <h1>Something went wrong.....</h1>
        ) : (
          products.map(product=>{

            return <div className="col-md-3 m-3"  key={product._id}>
              <Product product={product}/>
            </div>
           })
        )

      
      }
    </div>
    </div>
   
  );
}

export default Homescreen;
