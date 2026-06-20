import { useEffect,useState } from "react";

import { Link,useLocation } from "react-router-dom";

import api from "../../api";


const PaymentPart = ({setNumberCartItems}) => {
    const [Message, setMessage] = useState("Verifying your payment")
    const [subMessage,setSubMessage]=useState("Wait a moment please,  we should verify your payment!")
    const location =  useLocation()

    useEffect(function(){
        const qParams = new URLSearchParams(location.search)
        const status = qParams.get('status')
        const txRef = qParams.get('tx_ref')
        const transactionId = qParams.get('transaction_id')
        if(status && txRef && transactionId){
            api.post(`payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
            .then(res =>{
                
                setMessage(res.data.message)
                setSubMessage(res.data.subMessage)
                setNumberCartItems(0)
               
            })
            .catch(err=>{
                console.log(err.message)
                if(err.response?.data?.message){
                    setMessage(err.response.data.message)
                    setSubMessage(err.response.data.message)

                }
            })
        }
    },[])



  return (
    <header className="py-5" style={{background:'var(--payment-bg)'}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                         <h1 className="display-4 fw-bold">{Message}</h1>
                         <p className="lead fw-normal text-white mb-4">{subMessage}</p>
                         <span>
                            <Link to="/profile" className="btn btn-outline btn-lg px-4 py-2 mx-3">View Order Detail</Link>
                            <Link to="/" className="btn btn-outline btn-lg px-4 py-2 ">Continue Shopping</Link>

                         </span>
                </div>
            </div>
    </header>
  )
}

export default PaymentPart