import React from "react";
import { useLoginMutation,} from "../../services/crmApi";

function Login() {
    
    var [loginfn]=useLoginMutation();
   
        function login() {
          var x={
            username:document.getElementById('a1').value,
            password:document.getElementById("a1").value
        }
        loginfn(x).then((res)=>console.log(res))
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