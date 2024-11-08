import logo from './logo.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Signup from './feactures/user/signup';
import Login from './feactures/user/login';
import Navebar from './feactures/user/navebar';
import { useCallback, useEffect } from 'react';

function App() {
  
  var navgate= useNavigate();
    useEffect(()=>{
      console.log(window.localStorage.getItem('token'));
      
      if (window.localStorage.getItem('token')) {
        navgate('/dasbord')
    }
    else{
      navgate('/login')
    }
    },[])
  return (
    <div>
      <Navebar></Navebar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
