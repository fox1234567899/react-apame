import { useState,useEffect } from "react"
import PlaceHolderContainer from "../UI/PlaceHolderContainer"
import CardCaontainer from "./CardCaontainer"
import Header from "./Header"
import api from "../../api"
import Error from "../UI/Error"

import { randomNumberForCart } from "../../CartCodeFunctionallity.js"


const HomePage = () => {




    const[products,setProducts]= useState([])
    const [loading,SetLoading] = useState(false)
    const [error, setError]= useState("")




    useEffect(function(){
        SetLoading(true)
        api.get('items')
        .then(res=>{
            setProducts(res.data)
            SetLoading(false)
            setError("")
            })
        .catch(err=>{
            console.log(err.message)
            SetLoading(false)
            setError(err.message)
        
        })


    },[])

    
  
  return (
    <>
    
    <Header />
    {error && <Error error={error}/>}
    {loading && <PlaceHolderContainer/>}
    {loading || error!=""|| <CardCaontainer products={products}/>}
    </>
  )
}

export default HomePage