import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../api";

export const AuthorizationforContext = createContext(null);

export function AuthSystem({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState("");

  const checkAuth = () => {
    const token = localStorage.getItem("access");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    try {
      const decoded = jwtDecode(token);
      const current_time = Date.now() / 1000;
      if (decoded.exp >= current_time) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

 function get_username(){
    api.get('get_username')
    .then(res=>{
        console.log(res.data.username)
        setUsername(res.data.username)
    })
    .catch(err=>{
        console.log(err.message)
    })
 }

  useEffect(() => {
    checkAuth();
   
  }, []);
   useEffect(() => {
   if(isAuthenticated) get_username()
 
  }, [isAuthenticated]);



  const authValue = {isAuthenticated, username, get_username,setIsAuthenticated}
   return (<AuthorizationforContext.Provider value={authValue}>
        {children}
    </AuthorizationforContext.Provider>
   )
}