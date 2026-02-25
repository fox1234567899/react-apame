import CustomerOrder from "./CustomerOrder"
import styles from "./checkout.module.css"
const orderSummary = ({shipping,cartitems,cartTotal,tax}) => {
    let shippingProcess=shipping
    let subTotal=cartTotal
    let cartTax= tax
    let total = cartTotal+tax+shipping
    if(subTotal>=50){
        shippingProcess = 0
        total= tax + cartTotal
    }
    shippingProcess = shippingProcess.toFixed(2)
    subTotal = subTotal.toFixed(2)
    cartTax =cartTax.toFixed(2)
    total=total.toFixed(2)
  return (
   <div className='col-md-8 ' style={{marginTop:"90px"}} >
    <div className='card mb-4  '>
        <div  className={` ${styles.h}`}>
            <h5>Cart Summary</h5>
        </div>
        <div className='card-body ' style={{background:"var(--card-bg)"}}>
            <div className={`${styles.w}`}>
                {cartitems.map(cartitem=><CustomerOrder key={cartitem.id} cartitem={cartitem}/>)}
               
            </div>
            <hr style={{color:'var(--text-color)'}}/>
             <div className="d-flex justify-content-between mt-3 p-2">
                    <h6 className="" style={{fontFamily:'fangsong',color:'var(--text-color)'}}>Tax:</h6>
                <h6 className="ms-2" style={{fontFamily:'fangsong',color:'var(--text-color)'}}>{`$${cartTax}`}</h6>
                </div>
            <div className="d-flex justify-content-between mt-3 p-2">
               

                <h6 className="" style={{fontFamily:'fangsong',color:'var(--text-color)'}}>Total:</h6>
                <h6 className="ms-2 " style={{fontFamily:'fangsong',color:'var(--text-color)'}}>{`$${total}`}</h6>

            </div>
            
                
        </div>
    </div>
  
   </div>
  )
}

export default orderSummary