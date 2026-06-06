import { useState,useEffect } from "react";
import api from "../../api";




function useCardData(){

    const [cartitems,setCartItems] = useState([])
    const [cartTotal,setCartTotal] = useState(0.00)
    const tax = 4.00
    const shipping = 10.00
    const [loading,setLoading] = useState(false)
    useEffect(function(){
        api.get(`get_cart`)
        .then(res=>{
            setLoading(false)
            setCartTotal(res.data.sum_total)
            setCartItems(res.data.cartitems || [])
        })
        .catch(err =>{
            setLoading(false)
        })
    },[])
  return { 
    shipping,cartitems,setCartItems,cartTotal,setCartTotal,tax,loading,setLoading
  }
}

export default useCardData