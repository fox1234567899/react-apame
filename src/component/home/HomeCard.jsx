import { Base_URL } from '../../api'
import { Link } from 'react-router-dom'
import styles from "./homeCard.module.css"
export const HomeCard = ({product}) => {
  return (
   <div className={`col-12 col-sm-6 col-md-4 col-lg-3 py-3  `}>
<Link to={`/detail/${product.slug}`} style={{textDecoration:"none"}} >          
  <div className={styles.card} >
                <div className={`${styles.wrapper}`} >
                    <img src={product.image}className={`${styles.cardImage}`}  alt="Product image" />
                </div>
                <div className='my-2 ' >
                    <h5 className={` mb-1`} style={{fontFamily:"monospace" ,textAlign:"center" ,fontSize:"25px"}}>{product.name}</h5>
                    <h5 style={{color:"var(--card-price)" , textAlign:"center", fontFamily:"fangsong" }}>{`$${product.price}`}</h5>
                </div>
            </div>
        </Link>
    </div>
  )
}
