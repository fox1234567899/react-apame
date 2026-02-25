import React, { useEffect, useState } from 'react'
import { replace, useLocation,useNavigate } from 'react-router-dom'
import { HomeCard } from '../componenet/home/HomeCard'
import api from "../api"
import HomePage from '../componenet/home/HomePage'
import styles from './search.module.css'
const SearchPage = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const location= useLocation()
    const navigate = useNavigate()
    const query= new URLSearchParams(location.search).get("q")
    
    useEffect(function(){
        
        setLoading(true)
        api.get(`search/?q=${query}`)

        .then(res=>{
            setProducts(res.data)
            setLoading(false)

        })
        .catch(err=>{
            console.log(err.message)
            setLoading(false)
        })
    },[query,navigate])
  
  return (
    <div style={{background:'var(--text-color)'}}>
        <div className={` ${styles.s}`}>
            <p className={`fixed ${styles.g}`} >Result for:  {query}</p>
        </div>
       {products.length === 0 ? (
            <p className='container product-grid ' style={{marginTop:'50px', marginBottom:'50px' , width:"auto", height:'30vh', fontSize:'30px', textShadow:'0 0 20px var(--bg-color3)', color:"var(--text-color2)"}}>No items related to your search</p>
        ) : (
            <div className='container mt-3'>
            <div className="  row gx-3 gy-2  justify-content-center"  >
                {products.map(product => (
                        <HomeCard key={product.id} product={product} />
                    
                ))}
            </div>
            </div>
        )}

    </div>
  )
}

export default SearchPage