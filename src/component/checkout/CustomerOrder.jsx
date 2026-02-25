import React from 'react'
import { Base_URL } from '../../api'


const CustomerOrder = ({cartitem}) => {
  return (
    <div>
      <hr style={{color:'var(--text-color)'}}/>
   <div className={` d-flex justify-content-between align-items-center mb-3`}>
    <div className={`  d-flex align-items-center`}>
        <img src={`${Base_URL}${cartitem.item.image}`} style={{width:'60px',height:'80px', borderRadius:'5px'}}   alt="" />
        <div>
            <h6 className='mb-3' style={{margin:'15px' , fontFamily:'monospace',color:'var(--text-color)'}}>{cartitem.item.name}</h6>
            <b style={{margin:'12px' , fontFamily:'sans-serif',color:'var(--text-color)'}}>{`Quantity: ${cartitem.quantity}`}</b>
        </div>
      
    </div>
    <h5 style={{fontFamily:'fangsong',color:'var(--text-color)'}}>{`$${cartitem.item.price}`}</h5>
    
   </div>
      
   </div>
   
  )
}

export default CustomerOrder