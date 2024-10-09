import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/garage';
import Goat from './components/goat';
import List from './components/list';
import Timer from './components/timer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
    <Goat/>
    <List/>
    <Timer/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
