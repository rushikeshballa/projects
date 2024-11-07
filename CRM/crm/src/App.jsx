import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Signup from './feactures/user/signup';
import Login from './feactures/user/login';
import Navebar from './feactures/user/navebar';

function App() {
  return (
    
    <div>
      <Navebar></Navebar>
    </div>
  );
}

export default App;
