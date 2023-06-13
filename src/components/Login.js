import React, { useState } from 'react';
import Cookies from 'js-cookie'; 
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [loginState,setLoginState]=useState({});
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

	const handleLogin = (e) => {
    e.preventDefault();
    authenticateUser();
		
    // Redirect the user to the home page or perform any other desired action
		alert('Login successful!');
    navigate("/home")
	};

  const authenticateUser = () =>{
    console.log(JSON.stringify(loginState))    
    const endpoint=`127.0.0.1:8000/auth/login/`;
     fetch(endpoint,
         {
         method:'POST',
         headers: {
         'Content-Type': 'application/json'
         },
         body:JSON.stringify(loginState)
         }).then(response=>response.json())
         .then(data=>{
          let jwtToken = data.token;
          // Save the JWT in the browser's cookies
          Cookies.set('jwt', jwtToken, 30);

         })
         .catch(error=>console.log(error))
     
}

   return(
       <form className="mt-8 space-y-6" onSubmit={handleLogin}>
       <div className="-space-y-px">
          <Input
                handleChange={handleChange}
                value={loginState["email-address"]}
                labelText="Email address"
                labelFor="email-address"
                id="email-address"
                name="email"
                type="email"
                isRequired={true}
                placeholder={"Informe seu e-mail"}
          />
          <Input

                handleChange={handleChange}
                value={loginState["password"]}
                labelText="Password"
                labelFor="password"
                id="password"
                name="password"
                type="password"
                isRequired={true}
                placeholder="Informe sua senha"
          />
       </div>

       <FormAction handleLogin={handleLogin} text="Login"/>

     </form>
   )
};

export default Login;
