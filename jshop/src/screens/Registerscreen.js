import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Registerscreen() {


  
  const registerstate =  useSelector(state=>state.registerNewUserReducer)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

const {loading,error,success}=registerstate
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

            {loading && (<Loader/>)}
            {error && (<Error error ='Email Address is already registred' ></Error>)} 
            {success && (<Success success='Your Registration is successfull' />)}
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
            <a  href="/login" className='m-3'>Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
