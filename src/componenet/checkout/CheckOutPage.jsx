import OrderSummary from "./orderSummary";
import PaymentSection from "./PaymentSection";
import useCardData from "../../assets/hooks/useCardData";
import styles from "./checkout.module.css"



const CheckOutPage = () => {

    const {cartitems,setCartItems,cartTotal,setCartTotal,tax,loading,shipping} = useCardData()


  return (
    <div style={{background:"var(--navbar-bg)",top:'0' , overflowX:'hidden'}}>
    <div className={`container my-2  ${styles.d}` } >
        <div className="row ">
            <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax} shipping={shipping}/>
            <PaymentSection />
        </div>
    </div>
    </div>
  )
}

export default CheckOutPage