import { Base_URL } from "../api"


const OrderStatus = ({order}) => {
  return (
   <div className="col-md-6 col-lg-4 mb-4">
      <div className="card" >
        <div className="d-flex justify-content-between p-3">
          
          <div
            className="bg-info rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "35px", height: "35px" }}
          >
            <p className="text-white mb-0 small">x{order.quantity}</p>
          </div>
        </div>

        <img style={{height: "250px",
    objectFit: "cover"}}
          src={`${Base_URL}${order.item.image}`}
          className="card-img-top "
          alt="Product"
        />

        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="small text-muted">{order.item.category}</p>
         
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{order.item.name}</h5>
            <h5 className="text-dark mb-0">${order.item.price}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStatus