import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import ProductDesc from './screens/ProductDesc';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

import Orderscreen from './screens/Orderscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';

function App() {
  return (
    <div className="App">

        <Navbar/>

        <BrowserRouter>
        <Route path='/' component={Homescreen} exact />
        <Route path="/product/:id" component={ProductDesc}/>
        <Route path='/cart' component={Cartscreen}/>
        <Route path='/register' component={Registerscreen}/>
        <Route path='/login' component={Loginscreen}/>
        <Route path="/orders" component={Orderscreen}/>
        <Route path="/orderinfo/:orderid" component={Orderinfo}/>
        <Route path='/profile' component={Profilescreen}/>
        </BrowserRouter>


    </div>
  );
}

export default App;
