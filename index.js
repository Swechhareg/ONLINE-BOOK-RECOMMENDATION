import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import './components/App.css';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//Calling WOWjs
import WOW from 'wowjs';
class index extends React.Component {
  // Defining WOW 
  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }}
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

