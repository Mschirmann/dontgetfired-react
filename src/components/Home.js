import { useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; 
import axios from "../utils/axios";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(Cookies.get('token'));

  const handleLogout = () => {
    console.log("logout")
    Cookies.remove('token');
    delete axios.defaults.headers.common.Authorization;
    setAuthenticated(false)
}


  if (!authenticated) {
    return <Navigate replace to="/signin" />;
  } else {
    return (
      <div>
            <button
                type='submit'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"
                onClick={handleLogout}
            >
                Sair
            </button>
      </div>
    );
  }
};

export default Home;