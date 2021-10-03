import React ,{useState,useEffect}from 'react'
import {useDispatch} from 'react-redux';
import { loginUser } from '../actions/userActions';

function Loginscreen() {

const [email,setemail]=useState('')
const [password,setpassword]=useState('')

const dispatch=useDispatch();


const  login=(e)=>{

e.preventDefault();

const user={
    email:email,
    password:password
}
dispatch(loginUser(user));

}

//check already logged in
useEffect(() => {
    
   if(localStorage.getItem('currentUser')){
       window.location.href='/'
   }


}, [])

    return (
        <div>
             <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="div ">
            <h1 className="text-center">LOGIN</h1>
            
           <form onSubmit={login}>
           
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
            
           
            <br />
            <div className="text-center">
              <button type='submit'className="btn btn-primary">LOGIN</button>
            </div>
            </form>

            <a href="/register">Register Here !</a>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Loginscreen
