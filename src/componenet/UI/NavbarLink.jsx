import { useContext } from "react"
import { Link,NavLink } from "react-router-dom"
import { AuthorizationforContext } from "../../context/AuthorizationforContext"
const NavbarLink = () => {

  const {isAuthenticated,setIsAuthenticated,username}=useContext(AuthorizationforContext)
  function logout(){
    localStorage.removeItem("access")
    setIsAuthenticated(false)
  }

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {isAuthenticated ?(
        <>
        <li className="nav-item">
          <NavLink to="/profile"  style={{color:'var(--text-color2)'}}   className={({isActive}) => isActive ? "nav-link active fw-semibold":"nav-link fw-semibold"}>{`Hi ${username}`}</NavLink>
        </li>
         <li className="nav-item" onClick={logout}>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active fw-semibold":"nav-link fw-semibold"}  style={{color:'var(--text-color2)'}} >Logout</NavLink>
        </li>
        
        </>
      ) :(
        <>
         <li className="nav-item">
          <NavLink to="/login" className={({isActive}) => isActive ? "nav-link active fw-semibold":"nav-link fw-semibold"} style={{color:'var(--text-color2)'}}   end>login</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/register" className={({isActive}) => isActive ? "nav-link active fw-semibold":"nav-link fw-semibold"}  style={{color:'var(--text-color2)'}}   end>Register</NavLink>
        </li>
        
        </>
      )}
    </ul>
  )
}

export default NavbarLink