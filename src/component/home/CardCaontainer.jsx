import React from 'react'
import { HomeCard } from './HomeCard'
import styles from './homeCard.module.css'
const CardCaontainer = ({products}) => {
  if(products<1){
    return(
      <>
      <h1>This is a demo site with fake payment (made for rersume)</h1>
      <p>no item in here</p>
      
      </>
      
    )
  }
  return (
    <section className={`py-5 ${styles.b} `}   id='Shop'>
       <h4 style={{textAlign:'center',opacity:'0.7', color:'var(--text-color2)'}}>This is a demo site with fake payment (made for rersume)</h4>
        <h5 style={{textAlign:"center ",color:"var(--text-color2)",}}>What are You Looking For?</h5>
        <div className='container px-4 pc-lg-5 mt-5'>
            <div className='row justify-content-center '>
              
                {products.map(product => <HomeCard key={product.id} product={product} />)}
             
              
            </div>
        </div>
    </section>
  )
}

export default CardCaontainer