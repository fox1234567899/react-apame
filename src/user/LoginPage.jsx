import { useState,useEffect, useContext } from "react";
import api from "../api";
import Error from "../component/UI/Error"
import {Link, useLocation,useNavigate} from "react-router-dom"
import styles from "./login.module.css"
import { toast } from "react-toastify";

import { AuthorizationforContext } from "../context/AuthorizationforContext";

const LoginPage = () => {
    const {setIsAuthenticated, get_username} = useContext(AuthorizationforContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")
    const userInfo = {username,password}

    function submitSystem(e){
            e.preventDefault()
            setLoading(true)
            api.post("/token/" , userInfo)
            .then(res=>{
                localStorage.setItem("access", res.data.access)
                localStorage.setItem("refresh", res.data.refresh)
                setUsername("")
                setPassword("")
                setLoading(false)
                setIsAuthenticated(true)
                get_username()
       

                setError("")
                const from = location?.state?.from.pathname || "/";
                navigate(from,{replace:true});

            })
            .catch(err=>{
                console.log(err.message)
                toast.error('type your username and password correctly!')
                
                setLoading(false)
            })
    }

  return (
    
    <div className ={`${styles.fullscreen_container}`}>
        <div className={` ${styles.login_container}`} style={{margin:'120px'}}>

            <h3 className={` ${styles.login_title}`}>Welcome Back to your site</h3>
           
            <form onSubmit={submitSystem}>
                <div className={`${styles.input_group}`}>
                    <label >Username</label>
                    <input className={`${styles.i}`} type="username" value={username} onChange={(e)=>setUsername(e.target.value)}  required placeholder=""/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >Password</label>
                    <input className={`${styles.i}`}  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required placeholder=""/>

                </div>
                <button type="submit" className={`${styles.login_button}`}  disabled={loading} >Login</button>
            </form>
            <div className="login_footer">
                <p><a href="#">Forget Password</a></p>
                <p>Don't have an account?<Link to="/register">Sign In</Link></p>
            </div>
        </div>
    </div>
   

  )
}

export default LoginPage