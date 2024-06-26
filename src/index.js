import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './components/appRouter';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  {/* <App/> */}
  <RouterProvider router={AppRouter} />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
