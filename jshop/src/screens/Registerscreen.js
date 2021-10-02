import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { registerNewUser } from "../actions/userActions";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");


  const dispatch=useDispatch()
  const  register=(e)=>{
e.preventDefault()

const user={
    name:name,
    email:email,
    password:password
}

    if(password==cpassword){

       dispatch(registerNewUser(user))
    
    }else{
        alert("Password should be matched")
    }
    

  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="div ">
            <h1 className="text-center">Register</h1>
           <form onSubmit={register}>
           <input
              type="text"
              placeholder="Name"
              required
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              required

              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
           
            <br />
            <div className="text-center">
              <button type='submit'className="btn btn-primary">Register</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
