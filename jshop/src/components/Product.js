import React from "react";
import './css/product.css'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'
const Product = ({product}) => {
  return (
    <div className="p-20 card">
      <Link to={`product/${product._id}`}>
       <div >
      <img
        src={product.image}
        class="card-img-top img-responsive"
        alt="product"
      />

      <div class="card-body">
        <h5  className="card-text">{product.name}</h5>
        
        <Rating
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          />
        <h6 className="card-text">Price:{product.price}</h6>
      </div>
      <h1></h1>
    </div>
      </Link>
      </div>
   
  );
};

export default Product;
