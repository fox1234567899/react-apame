import { useEffect, useState,useRef } from "react"
import { Base_URL } from "../api"
import OrderStatusContainer from "./OrderStatusContainer"
import api from "../api"
import { toast } from "react-toastify"
import {FaSearch} from 'react-icons/fa'
const UserInformation = ({orders,userInformation}) => {
  const[userInfo,setUserInfo]=useState(userInformation)
  const [image,setImage]= useState(null)
  const fileInputRef=useRef(null)

  useEffect(function(){
      setUserInfo(userInformation)
  },[userInformation])
  const submitPic = ()=>{
    if(!image) return;
    const formData= new FormData()
    formData.append('avatar',image)
    api.put(`changeProfilePicture/`,formData,{headers:{'Content-Type':"multipart/form-data",}})
    .then(res=>{
      setUserInfo(res.data)
      toast.success('you have chosen your avatar successfully ')
      setImage(null)
    })
    .catch(err=>{
        console.log(err.message)
    })
  }
const  triggerFileInput =()=>{
    fileInputRef.current.click();
}
  return (
  <section className="mt-5"  style={{ background: "var(--text-color)" }}>
  <div className="container py-5">

    <div className="row">
      
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card" style={{ borderRadius: ".6rem" }}>
          <div className="text-center text-white p-4" style={{background:'var(--gradient-custom)'}}>
            <img
              src={userInfo.avatar?`${Base_URL}${userInfo.avatar}`:`${Base_URL}img/user/happystick.jpg`}
              alt="Avatar"
              className="img-fluid  mb-3"
              style={{ width: "100px" , borderRadius:"300px 300px 10px 10px" }}
            />
            <div className="d-flex align-items-center justify-content-center gap-2">
               <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button
                onClick={() => fileInputRef.current.click()}
                style={{
                  backgroundColor: "var(--button-color2)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                        }}
                      >
                  <FaSearch />
                </button>

                <div >
                  <button
                  style={{backgroundColor:'var(--button-color3)' , color:'white'}}
                    className="btn"
                    onClick={submitPic}
                    disabled={!image} // disable until a file is selected
                  >
                    Submit
                  </button>
                </div>
                </div>

            
            <h5>{userInfo.username}</h5>
            <p className="mb-0">{userInfo.email}</p>
          </div>

          <div className="card-body">
            <h6>Information</h6>
            <hr />

            <p><strong>First name:</strong> {userInfo.username}</p>
            <p><strong>Last name:</strong> {userInfo.last_name}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>Address:</strong> {userInfo.address}</p>
          </div>
        </div>
      </div>

   
      <div className="col-lg-8 col-md-12">
        <div className="card">
          <div className="card-body" style={{background:"var(--bg-color3)" ,outline:'none',
       maxHeight: "700px",
       overflowY: "auto",border:"none"}}>
            <h5 style={{color:'var(--text-color2)'}} >Orders History</h5>
            <hr style={{color:"var(--text-color2)"}} />

            <div className="row">
              <OrderStatusContainer orders={orders} />
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  
</section>

  )
}

export default UserInformation




