
import { Link } from "react-router-dom"
const CartSummary = ({cartTotal,tax,shipping}) => {
    let shippingProcess=Number(shipping)
    let subTotal=Number(cartTotal)
    let cartTax= Number(tax)
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
    <div className="col-lg-4 " >
  
            <div className="card cart-summary" style={{background:'var(--card-bg)'}}>
                <div className="card-body">
                    <h5 className="card-title mb-4" style={{color:'var(--text-color)'}}    >Order Summary</h5>
                    <div className="d-flex justify-content-between mb-3">
                        <span style={{color:'var(--text-color)'}}>Subtotal</span>
                        <span style={{color:'var(--text-color)'}} >{`$${subTotal}`}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span style={{color:'var(--text-color)'}} >Shipping</span>
                        <span style={{color:'var(--text-color)'}} >{`$${shippingProcess}`}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span style={{color:'var(--text-color)'}} >Tax</span>
                        <span style={{color:'var(--text-color)'}} >{`$${cartTax}`}</span>
                    </div>
                    <hr style={{color:"var(--text-color"}} />
                    <div className="d-flex justify-content-between mb-4">
                        <strong  style={{color:'var(--text-color)'}} >Total</strong>
                        <strong style={{color:'var(--text-color)'}} >{`$${total}`}</strong>
                    </div>
                    <Link to="/checkout">
                    <button className="btn btn-outline-success w-100">
                        Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
      
            
        </div>
  )
}

export default CartSummary