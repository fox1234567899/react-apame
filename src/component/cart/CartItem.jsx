import  { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { Base_URL } from '../../api';
import api from '../../api';
import {toast} from 'react-toastify'
const CartItem = ({setCartItems,item,setCartTotal,cartitems,setNumberCartItems}) => {


    const[quantity,setQuantity] = useState(item.quantity)
    const [loading,setLoading] = useState(false)
    const itemData = {quantity:quantity, item_id:item.id}
    const itemId={item_id:item.id}

    function deleteCartItem(){
        const confirmDeleteItem=window.confirm("are you sure you want to delete this product from your list?")
        if(confirmDeleteItem){
            api.post("delete_CartItem/",itemId)
            .then(res=>{
                toast.success('your item deleted successfully!')
                setCartItems(cartitems.filter(cartitem => cartitem.id != item.id))
                setCartTotal(cartitems.filter(cartitem => cartitem.id != item.id).reduce((acc,curr)=> acc+curr.total , 0))
                setNumberCartItems(cartitems.filter(cartitem => cartitem.id != item.id).reduce((acc,curr)=> acc+curr.quantity , 0))


            })
            .catch(err =>{
                console.log(err.message)
            })
        }     
    }

    function updateCartItem(){
        setLoading(true)
        api.patch("update_quantity/",itemData)
        .then(res =>{
            toast.success('your item updated successfully!')

            setLoading(false)
            setCartTotal(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem).reduce((acc,curr)=> acc+curr.total , 0))
            setNumberCartItems(cartitems.map((cartitem) => cartitem.id === item.id ? res.data.data : cartitem).reduce((acc,curr)=> acc+curr.quantity , 0))
         
        })
        .catch(err =>{
            console.log(err.message)
            setLoading(false)
        })
    }

     function increaseQuantity(){
        setQuantity(p =>p+1)
      
     }

     function decreaseQuantity(){
        setQuantity(p =>Math.max(1,p-1))
     } 

     function handleTheQuantity(e){
        const value= Number(e.target.value)
        setQuantity(value<1?1:value)

     }

    
  return (
    
   
     
      
            <div className="card mb-4">
                <style>
                         {`
            
            input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
            }
            .spin {
            animation: spin 1s linear infinite;
            }

            @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
            }
        `}

                </style>
                <div className="card-body" style={{background:'var(--card-bg'}} >
                    <div className="row cart-item mb-3">
                        <div className="col-md-3">
                            <img src={`${item.item.image}`}   alt="Product 1" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-5">
                            <h5 className="card-title" style={{color:'var(--text-color'}} >{item.item.name}</h5>
                            <p className="" style={{color:'var(--text-color'}}>Category: {item.item.category}</p>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <button className="btn btn-outline-secondary btn-sm" onClick={decreaseQuantity} type="button">-</button>
                                <input style={{maxWidth:"100px"  }}  type="number" value={quantity} onChange={handleTheQuantity}  className="form-control   form-control-sm text-center quantity-input j"  />
                                <button className="btn btn-outline-secondary btn-sm" onClick={increaseQuantity} type="button">+</button>
                            </div>
                        </div>
                        <div className="col-md-2 text-end">
                            <p className="fw-bold" style={{color:'var(--text-color'}}>{`$${item.item.price}`}</p>
                            <button   className="btn btn-sm btn-outline-primary" onClick={updateCartItem}>
                              <GrUpdate   className={loading ? "spin" : ""} />
                                   
                                    
                                </button>
                                  <button className="btn btn-sm btn-outline-danger " onClick={deleteCartItem} style={{marginLeft:"10px"}}>
                                    <i ><FaTrashCan /></i>
                                    
                                </button>
                        </div>
                       
                    </div>
                  
                    
                </div>
            </div>
          
            
    
       
  

  )
}

export default CartItem