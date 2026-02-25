import Navbvar  from "../UI/Navbvar";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";
import styles from '../../search/search.module.css'
import { ToastContainer } from "react-toastify";
const MainLayout = ({numCartItems}) => {
  return (
    <>
   <Navbvar numCartItems={numCartItems} />
    <ToastContainer  toastClassName={`${styles.tt}`} />

    <Outlet />
   <Footer />
   </>
  )
}

export default MainLayout