import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch=useDispatch()
  return (
    <div className="container card ">
      <div className="row justify-content-center">
        <div className="col-md-2 m-3">
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>
        <div className="col-md-2 m-4">
          <select value={sort}
          onChange={(e)=>{ setsort(e.target.value)}}
          className="form-control">
            <option value="Popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <select value={category} onChange={(e)=>{setcategory(e.target.value)}} className="form-control">
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Games">Games</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <button onClick={()=>{dispatch(filterProducts(searchkey , sort ,category))}} className="btn btn-primary">FILTER</button>
        </div>
      </div>
    </div>
  );
}
