import { useState } from "react"
import api from "../../api"

import styles from "./checkout.module.css"
import Spinner from "../UI/Spinner"
const PaymentSection = () => {
    const [loading,setLoading]= useState(false)

    function startPayment(){
        setLoading(true)
        api.post('apame_payment/')
        .then(res=>{
            window.location.href= res.data.data.link
            setLoading(false)
        })
        .catch(err=>{
                console.log(err.message)
                setLoading(false)
        })
    }

    if(loading){
        <Spinner />
    }


  return (
    <div className="col-md-4 " style={{marginTop:"90px" ,outline:"none"}}>
        <div className="card " style={{background:'var(--card-bg)'}} >
            <div className="card-header bg-warning">
                <h5>Payment Part</h5>
            </div>
            <div className="card-body">
                <button className={`btn ${styles.s}`} id="flutterwave-button" onClick={startPayment}>
                    <i className="bi bi-credit-card" style={{color:'var(--text-color2)'}}></i> Pay with FlutterWave
                </button>
            </div>
        </div>
    </div>
  )
}

export default PaymentSection