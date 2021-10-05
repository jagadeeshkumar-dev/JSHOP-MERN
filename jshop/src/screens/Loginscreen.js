import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { loginUser } from '../actions/userActions';
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {

  const loginreducer = useSelector(state=>state.loginReducer)

  const {loading,error} =loginreducer
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
          <div className="div text-center">
            <h1 className="text-center">LOGIN</h1>
            
            {error && (<Error error='Invalid Credntials'/>)}
            {loading && (<Loader/>)}
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

            
          </div>
          <a href="/register">Register Here !</a>
        </div>
      </div>
        </div>
    )
}

export default Loginscreen
