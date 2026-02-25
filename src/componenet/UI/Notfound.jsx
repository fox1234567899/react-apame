import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
const Notfound = () => {
  return (
   <div className={styles.wrapper}>
  <div className={`card ${styles.m}`}>
    <div className={`${styles.a}`} >
      NOT FOUND 404
    </div>

    <div className={`card-body text-center ${styles.t}`}>
      <h1 className={`    card-title `}>
        oops the page you're looking for does not exist
      </h1>

      <Link to="/" className={`btn  my-3  ${styles.b}`}>
        Go back to home
      </Link>
    </div>
  </div>
</div>
  )
}

export default Notfound