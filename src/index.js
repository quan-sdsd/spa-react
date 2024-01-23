import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/common.css';
import reportWebVitals from './reportWebVitals';
import SiteTopBar from "./component/site-top-bar";
import NavigationBar from "./component/navigation-bar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SiteTopBar phone="0923123123" email="asdasfasfas@gmail.com" />
    <NavigationBar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
