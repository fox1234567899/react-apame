import React, { useEffect, useState } from 'react'
import  { FaSun,FaMoon } from 'react-icons/fa6';
import styles from "./Footer.module.css"
const Theme = () => {
    const [theme,setTheme] = useState('light');
    useEffect(function(){


    document.documentElement.setAttribute('data-theme',theme)
   
    },[theme]);
    const toggletheme =() =>{

        setTheme(theme == "light" ? "dark":'light')
    }
  
  return (
    <button className={`${styles.j}`}  onClick={toggletheme}>
        {theme === "light" ? <FaMoon  /> : <FaSun />} 
    </button>
  )
}

export default Theme