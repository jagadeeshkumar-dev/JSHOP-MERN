import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'

import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
<Provider store={store}>
<App />

</Provider>,   
 
  document.getElementById('root')
);


