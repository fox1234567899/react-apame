import React, { useEffect, useState } from 'react'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

import { Link } from 'react-router-dom'
import useCardData from '../../assets/hooks/useCardData'
import Spinner from '../UI/Spinner'
const CartPage = ({setNumberCartItems}) => {


  const{ shipping,cartitems,setCartItems,cartTotal,setCartTotal,tax,loading,setLoading} = useCardData()
  
   
  if(cartitems.length<1){
    return(
      <div style={{background:"var(--text-color)", width:'auto', height:'100vh', display: "flex",
    justifyContent: "center",
    alignItems: "center", overflowX:'hidden' }}>
              <div style={{padding:'300px',textAlign:'center',marginTop:'55px', fontSize:'60px', color:'var(--text-color2)',textShadow:'0 0 10px var(--shadow-bg)'}}>No Item In Here</div>

      </div>
    )
  }
  if(loading){
    return <Spinner loading ={loading} />
  }

  return (
    <div style={{backgroundColor:"var(--navbar-bg)", width:"100%",height:'100vh', overflowX:'hidden' }}>
    <div className="container" >
      <div>
    <p  style={{color:'var(--text-color2)',marginTop:'80px',marginBottom:'20px',fontSize:'50px'}}>Your Shopping Cart</p>

      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>


    </div>
    <div className="row">
      <div className="col-12 col-lg-8 my-2">
        <div style={{maxHeight:"500px" , overflowY:"auto", paddingRight:"10px" }} >
        {cartitems.map(item => <CartItem  key={item.id} item={item} setCartTotal={setCartTotal} cartitems={cartitems} setNumberCartItems={setNumberCartItems} setCartItems={setCartItems}/>)}
        </div>
            
      </div>
           <CartSummary  shipping={shipping} cartTotal={cartTotal} tax={tax} />
      
      
    </div>
      


    <div className="text-start my-3">
                <Link to="/" className="btn btn-outline-success">
                    <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </Link>
            </div>

    </div>
    </div>
  )
}

export default CartPage