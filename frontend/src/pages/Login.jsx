import React, {useState} from "react";
import API from "../services/api";

function Login(){

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleLogin = async () => {

  const res = await API.post("/auth/login",{
   email,
   password
  });

  const user = res.data;

  if(user.role === "buyer"){
   window.location = "/buyer";
  }else{
   window.location = "/seller";
  }

 };

 return(
  <div>

   <h2>Login</h2>

   <input
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    placeholder="Password"
    type="password"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button onClick={handleLogin}>
    Login
   </button>

  </div>
 )
}

export default Login;
