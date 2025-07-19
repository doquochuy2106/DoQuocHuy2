import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useEffect, useState } from 'react';
import AppRoutes from '../src/routes/AppRoutes'
import { Rings } from 'react-loader-spinner'
import { UserContext } from './context/UserContext';
import NavHeader from './components/Navigation/NavHeader';



function App() {
  // const { user } = useContext(UserContext);


  return (
    <Router>
      {/* {user && user.isLoading ?
        <div className='loading-container'>
          <Rings
            height="100"
            width="100"
            color='#1877f2'
            ariaLabel='loading'
          />
          <div>Loading data... </div>
        </div>
        : */}
      {/* <> */}
      <div className='app-header'>
        <NavHeader />
      </div>
      <div className='app-container'>
        <AppRoutes />
      </div>
      {/* </> */}
      {/* } */}


      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
