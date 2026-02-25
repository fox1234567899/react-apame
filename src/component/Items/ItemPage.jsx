import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {toast} from 'react-toastify'
import styles from './itemPage.module.css'
import api, { Base_URL } from "../../api"
import RelatedItems from "./RelatedItems"
import ProductPagePlaceHolder from "../UI/ProductPagePlaceHolder"



const ItemPage = ({setNumberCartItems}) => {
    const [loading,setLoading]= useState(false)
    const [item,setItem]= useState({})
    const {slug} = useParams()
    const [similarItems,setSimilarItems] =useState([])
    const [inCart,setInCart] = useState(false)
    
    useEffect(function(){
      if(item.id){
        api.get(`item_in_cart?item_id=${item.id}`)
        .then(res=>{
          setInCart(res.data.item_in_cart)
        })
        .catch(err =>{
          console.log(err.message)
        })
      }
    },[,item.id])



      const newItem = {item_id:item.id}


      function add_item(){
        api.post("add_item/",newItem)
        .then(res =>{
          setInCart(true)
          toast.success("item added to cart")
          setNumberCartItems(curr => curr+1)
        })
        .catch(err=>{
          console.log(err.message)
        })
      }

      useEffect(function(){
        setLoading(true)
        api.get(`detail/${slug}`)
        .then(res=>{
          setItem(res.data)
          setSimilarItems(res.data.similar_items ?? [])
          setLoading(false)
        })
        .catch(err =>{
          console.log(err.message)
          setLoading(false)
        })
      },[slug])

      if(loading){
        return <ProductPagePlaceHolder />
      }

  return (
    <div style={{backgroundColor:"var(--navbar-bg)"}}>
<div className="container py-5 " style={{backgroundColor:"var(--navbar-bg)"}}>
    <div className="row">
       
        <div className="col-md-6 mb-4 mt-">
            <div className="card my-5">
                <img  src={`${item.image}`} className="card-img-top" alt="Product Image"/>
                
            </div>
        </div>

      
        <div className="col-md-6 mt-5">
            <h1 className="h2 mb-3" style={{color:'var(--text-color2)'}}>{`$${item.price}`}</h1>
          

           

            <p className="mb-4" style={{color:'var(--text-color2)'}}>{item.description}</p>

      
            {/* <div className="mb-4">
                <h6 className="mb-2">Color</h6>
                <div className="btn-group" role="group">
                    <input type="radio" className="btn-check" name="color" id="silver"  />
                    <label className="btn btn-outline-secondary" htmlFor="silver">Silver</label>
                    <input type="radio" className="btn-check" name="color" id="gold"/>
                    <label className="btn btn-outline-secondary" htmlFor="gold">Gold</label>
                    <input type="radio" className="btn-check" name="color" id="black"/>
                    <label className="btn btn-outline-secondary" htmlFor="black">Black</label>
                </div>
            </div> */}

          
           

        
            <div className="d-grid gap-2">
                <button className="btn " type="button" onClick={add_item}  disabled={inCart} style={{backgroundColor:"var(--button-color)",outline:"none", color:"white"}} >Add to Cart</button>
              
            </div>

          
            <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-truck text-primary me-2"></i>
                    <span style={{color:'var(--text-color2)'}}>Free shipping on orders over $50</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-undo text-primary me-2"></i>
                    <span style={{color:'var(--text-color2)'}}>30-day return policy</span>
                </div>
                <div className="d-flex align-items-center">
                    <i className="fas fa-shield-alt text-primary me-2"></i>
                    <span style={{color:'var(--text-color2)'}}>2-year warranty</span>
                </div>
            </div>
        </div>
    </div>
</div>
<RelatedItems products={similarItems} />
</div>

)
}

export default ItemPage