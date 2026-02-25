import  { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainLayout from './componenet/layout/MainLayout'
import HomePage from './componenet/home/HomePage'
import Notfound from './componenet/UI/Notfound'
import ItemPage from './componenet/Items/ItemPage'
import api from './api'
import CheckOutPage from './componenet/checkout/checkOutPage'
import LoginPage from './user/LoginPage'
import CartPage from './componenet/cart/CartPage'
import { useState } from 'react'
import {AuthSystem } from './context/AuthorizationforContext'
import ProtectedRoute from './componenet/UI/ProtectedRoute'
import SearchPage from './search/SearchPage'
import ProfilePage from './user/ProfilePage'
import RegisterPage from './user/RegisterPage'
import "react-toastify/dist/ReactToastify.css";
import PaymentPart from './componenet/payment/PaymentPart'
const App = () => {
  const [numCartItems, setNumberCartItems] = useState(0)

  useEffect(function(){
    
      api.get(`get_cart_stat/`)
      .then(res=>{
        setNumberCartItems(res.data.num_of_items)
      })
      .catch(err =>{
        console.log(err.message)
      })
    
  })


  return (
     <AuthSystem>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
        <Route  index element={<HomePage />}/>
        <Route  path="detail/:slug" element={<ItemPage setNumberCartItems={setNumberCartItems} />}/>
        <Route  path="cart" element={<CartPage setNumberCartItems={setNumberCartItems} />}/>
        <Route  path="login" element={<LoginPage />}/>
        <Route  path="register" element={<RegisterPage />}/>

         <Route path="checkout" element={<ProtectedRoute> <CheckOutPage /> </ProtectedRoute> } />
         <Route  path="profile" element={<ProfilePage />}/>


        <Route  path="*" element={<Notfound />}/>
        <Route  path="search" element={<SearchPage />}/>
        <Route  path="payment-status" element={<PaymentPart setNumberCartItems={setNumberCartItems} />}/>
      
      </Route>
    </Routes>
    
    </BrowserRouter>
   </AuthSystem>
  )
}

export default App