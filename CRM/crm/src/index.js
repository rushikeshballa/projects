import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Signup from './feactures/user/signup';
import Login from './feactures/user/login';
import Dasbord from './feactures/user/dasbord';
import Addlead from './feactures/user/addlead';
const router = createBrowserRouter([

  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
            path:"/addlead",
            element:<Addlead></Addlead>
      },
      {
        path:"/dasbord",
        element:<Dasbord></Dasbord>,
        children:[
          
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
 
);

reportWebVitals();
