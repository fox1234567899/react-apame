import OrderStatus from "./OrderStatus"

const OrderStatusContainer = ({orders}) => {
  return (

   <div style={{background:"var(--bg-color3)"}}>

    <p className=" lead mb-0" style={{color:'var(--text-color2)'}}>list of orders:</p>
    <hr style={{color:"var(--text-color2)"}}/>
      <div className="row">
        {orders.length ===0 ?(
                <p className="text-muted" style={{color:'var(--text-color2)'}}>Still you did not paid or choose your items</p>

        ):(
            orders.map(order=><OrderStatus  key={order.id} order={order} />)
        )}
       
      </div>
    </div>
  )
}

export default OrderStatusContainer