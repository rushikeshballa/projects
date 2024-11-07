import React from "react";
import { useLoginMutation,} from "../../services/crmApi";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
    
    var [loginfn]=useLoginMutation();
    var navgate=useNavigate();
        function login() {
          var x={
            username:document.getElementById('a1').value,
            password:document.getElementById("a1").value
        }
        loginfn(x).then((res)=>{
            window.localStorage.setItem('token',res.data.token).then((()=>{
                if (window.localStorage.getItem('token')) {
                    navgate('dasbord')
                }
              
            }))
        })
        } 
    return (
        <div>

        <input type="text" id="a1" />:username
        <br />
        <input type="text"  id="a2"/>:passwoed
        <br />
        <button onClick={(()=>{login()})}>login</button>

        </div>)
}

export default Login;