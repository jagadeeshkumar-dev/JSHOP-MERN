import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";
export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();
  return (
    <div className="container card ">
      <div className="row justify-content-center p-1 bg-white rounded">
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
          <select
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
            className="form-control"
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <select
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            className="form-control"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2 m-4">
          <button
            onClick={() => {
              dispatch(filterProducts(searchkey, sort, category));
            }}
            className="btn btn-primary"
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
