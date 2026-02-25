import React from 'react'
import { HomeCard } from '../home/HomeCard'

const RelatedItems = ({products}) => {
  return (
    <div className={`py-3  `} style={{backgroundColor:"var(--container-bg)", }}
>
        <div className='container px-4 px-lg-5 mt-3' style={{boxShadow:'var(--box-similar)',  padding:'10px'  }}>
          <div style={{marginTop:"20px"}}>    <h3 className='fw-bolder   mb-4 'style={{ marginTop:"20px",   textAlign:"center", color:"var(--text-color2)" }}>Similar Products</h3></div>
    
        <div className='row gx-4 gx-lg-5 row-cols-md-3 row-cols-2 row-cols-xl-4 justify-content-center'>
            {products.map(product =><HomeCard key={product.id} product={product} />)}
        </div>
        </div>
        
    </div>
  )
}

export default RelatedItems