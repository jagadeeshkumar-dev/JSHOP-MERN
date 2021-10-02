import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
import { cartReducer } from "../reducers/cartReducer";

function Navbar() {
  const addtocartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = addtocartreducer;

  const currentuser = JSON.parse(localStorage.getItem("currentUser"));
 
  const dispatch = useDispatch()
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          J SHOP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {currentuser ? (
                      
                    <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 {currentuser.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="/orders">
                   Orders
                  </a>
                     <a className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>
                         Logout
                       </a>
                       
                
               
                 
                </div>
              
              </div>

             
            ) : (
              <li className="nav-item" >
                <a className="nav-link" href="/login">
                  <i className="fas fa-key"> Login</i>
                </a>
              </li>
            )}
          
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart">{cartItems.length}</i>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
