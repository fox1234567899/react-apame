import  { useState } from 'react'
import styles from './login.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import api from '../api'
import Error from '../component/UI/Error'
import { toast } from 'react-toastify'
const RegisterPage = () => {
    const [loading,setLoading]=useState(false)
    const [username,setUsername]=useState("")
    const [password1,setPassword1]=useState("")
    const [password2,setPassword2]=useState("")
    const [address , setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [first_name,setFirstName] = useState("")
    const [last_name,setLastName] = useState("")
    const [city,setCity] = useState("")
    const navigate=useNavigate()
    const location= useLocation()

    const [email,setEmail] =useState("")
    const [error,setError] = useState("")
    const userInputs={username,password1,password2,email,first_name,last_name,phone:phone,address,city}
    function submitForm(e){
        e.preventDefault()
        setLoading(true)
       
        api.post("registerPart/",userInputs)
        .then(res=>{
            const from = location.state?.from?.pathname || "/login";
            navigate(from, { replace: true });
            setError("")
            setAddress("")
            setUsername("")
            setPassword1("")
            setPassword2("")
            setEmail("")
            setCity("")
            setPhone("")
            setFirstName("")
            setLastName("")

            setLoading(false)
        })
        .catch(err=>{
            console.log(err.message)
            setError(err.response?.data?.message ||"error in register try again")
            toast.error('check your passwords be match or write your phone number in better way')
            setLoading(false)
        })

    }
  return (
     <div className ={`${styles.fullscreen_container2}`}>
        <div className={`${styles.wrapper}`}>
        <div className={`${styles.login_container}`} style={{margin:'120px'}}>
            
            <h3 className={styles.login_title}>Register</h3>
            {error && <Error error={error}/>}
            <div className='row'>
            <form onSubmit={submitForm}>
               
                <div className={`${styles.input_group}`}>
                    <label >Username</label>
                    <input className={`${styles.i}`} type="username" value={username} onChange={(e)=>setUsername(e.target.value)}  required placeholder="username"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >Email</label>
                    <input className={`${styles.i}`} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required placeholder="email"/>

                </div>

                <div className={`${styles.input_group}`}>
                    <label >Password1</label>
                    <input className={`${styles.i}`}  type="password" value={password1} onChange={(e)=>setPassword1(e.target.value)}  required placeholder="password"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >Password2</label>
                    <input className={`${styles.i}`} type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)}  required placeholder="password"/>

                </div>
                 <div className={`${styles.input_group}`}>
                    <label >Address</label>
                    <input className={`${styles.i}`} type="text" value={address} onChange={(e)=>setAddress(e.target.value)}  required placeholder="address"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >Phone</label>
                    <input className={`${styles.i}`} type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}  required placeholder="phonenumber"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >FirstName</label>
                    <input className={`${styles.i}`} type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)}  required placeholder="first name"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >LastName</label>
                    <input className={`${styles.i}`} type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)}  required placeholder="last name"/>

                </div>
                <div className={`${styles.input_group}`}>
                    <label >City</label>
                    <input className={`${styles.i}`} type="text" value={city} onChange={(e)=>setCity(e.target.value)}  required placeholder="city"/>

                </div>
                <button type="submit"  className={`${styles.login_button}`}  disabled={loading} >Submit</button>
            </form>
            <div className="login_footer">
              
                <p>you have an account?<Link to="/login">Sign Up</Link></p>
            </div>
        </div>
    </div>
    <div style={{ border: "none",
    background: "rgba(1,1,1,0.7)",
    width: "90%",
    maxWidth: "420px",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    boxSizing: "border-box"}}>
        <h1 className='my-2' style={{textAlign:'center', color:'white'}}>Remember</h1>
        <p className='my-2' style={{textAlign:'center', color:'white'}}>in phone part you should write like(try to be valid number): </p>
        <p className='my-2' style={{textAlign:'center', color:'white'}}>+12154567890</p>

    </div>
    </div>
    </div>
  )
}

export default RegisterPage