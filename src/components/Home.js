import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; 

const Home = () => {
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    const is_logged = Cookies.get('jwt');
    if (is_logged) {
        setAuthenticated(true);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
        
      </div>
    );
  }
};

export default Home;