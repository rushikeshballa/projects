import React from "react";
import { useSignupMutation } from "../../services/crmApi";

const Signup = (()=>{
    var [signupfn]=useSignupMutation();
   
        function signup() {
          var x={
            username:document.getElementById('a1').value,
            password:document.getElementById("a1").value
        }
        signupfn(x).then((res)=>console.log(res))
           
        } 
    return (
        <div>

        <input type="text" id="a1" />:username
        <br />
        <input type="text"  id="a2"/>:passwoed
        <br />
        <button onClick={signup}>signUP</button>

        </div>
    )
})

export default Signup;