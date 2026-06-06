import React, { useEffect, useState } from 'react'

import UserInformation from './UserInformation'
import api from '../api'
import Spinner from '../component/UI/Spinner'
const ProfilePage = () => {

	const [userInformation,setUserInformation] = useState({})
	const [orders,setOrders] = useState([])
	const [loading,setLoading] = useState(false)
	useEffect(function(){
		setLoading(true)
		api.get("user_information")
		.then(res=>{
			setUserInformation(res.data)
			setOrders(res.data.items)
			setLoading(false)
		})
		.catch(err=>{
			console.log(err.message)
			setLoading(false)
		})

	},[])
		if(loading){
			return <Spinner loading={loading} />
		}

  return (
		<div>
		<UserInformation orders={orders} userInformation={userInformation} />
		
		</div>
  )
}

export default ProfilePage