import React, { useState } from 'react';
import Cookies from 'js-cookie'; 
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";


const Login = () => {
    const [loginState,setLoginState]=useState({});
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

	const handleLogin = (e) => {
    e.preventDefault();
    authenticateUser();
	};

  const authenticateUser = async () => {
    try {
      const response = await axios.post('/v1/auth/login', {
        email: loginState["email"],
        password: loginState["password"],
      })
      if (response.data.user) {
          let jwtToken = response.data.token;
          if (jwtToken){
            // Save the JWT in the browser's cookies
            Cookies.set('token', jwtToken, 30);
            axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
            navigate("/")
          } else{
            Cookies.remove('token');
            delete axios.defaults.headers.common.Authorization;
          }

      }
    } catch (error) {
      console.log(error)
    }
  
}

   return(
       <form className="mt-8 space-y-6" onSubmit={handleLogin}>
       <div className="-space-y-px">
          <Input
                handleChange={handleChange}
                value={loginState["email"]}
                labelText="Email address"
                labelFor="email-address"
                id="email"
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
