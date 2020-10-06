import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';





// Request 1: Click to Change Text.

const printMessage=()=>{
  document.getElementById('h1text').innerHTML="Have a Good Time!";
}


// Request 2: Click to Show/Close Menu.






//index印出來

ReactDOM.render(
  <div>
    <App handleClick={printMessage}/>
    <div id="h1text"></div>

  </div>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
