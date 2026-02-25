
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { IoCart } from "react-icons/io5";
import NavbarLink from "./NavbarLink"
import Search from '../../search/Search';
import Theme from './Theme';
import brand from '../../assets/hooks/apame.png'
const Navbvar = ({numCartItems}) => {
  return (
  
   
           <nav className= {` navbar navbar-expand-lg  flex   fixed-top  ${styles.nr}`}  style={{boxShadow:"var(--navbar-shadow)"}}>
    <div className="container">
        <Link className={`navbar-brand ${styles.logo}`} style={{color:'var(--text-color2)',display:'flex', alignItems:'center',gap:'4'}}    to="/">
            <img src={brand} alt="BrandName"   className={`${styles.LogoImage}`}/>
            Apame
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav1">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className="nav-link active" style={{color:'var(--text-color2)'}}  to="/">Home</Link>
                </li>
                <Search />
             
              
                <NavbarLink />
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                    <li className="nav-item" style={{ position: "relative", display: "inline-block", marginLeft:"10px" }}>
                        
                        <IoCart style={{color:"var(--button-color)"}} size={28} /> 

                        {numCartItems > 0 && (
                        <span style={{
                        position: "absolute",
                        top: "-6px",    
                        right: "-6px",  
                        backgroundColor: "rgb(214, 21, 173)", 
                        color: "white",
                        borderRadius: "50%", 
                        padding: "3px 3px",  
                        fontSize: "12px",
                        fontWeight: "bold",
                        lineHeight: 1,
                        minWidth: "18px",   
                        textAlign: "center"

                    }}>
                        {numCartItems}
                        </span>
                        )}
                        
                    </li>
            </Link>
                  <Theme />
              

              
            </ul>
        </div>
    </div>
</nav>
        
    
   
  )
}

export default Navbvar