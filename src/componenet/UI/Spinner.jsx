import cat from '../../assets/hooks/orangecat.gif'
// import styles from './Footer.module.css'
import {ClipLoader} from 'react-spinners'



const Spinner = ({loading}) => {
  if(!loading) return null;
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"100vh", backgroundColor:'var(--text-color)', marginTop:"50px"}}>
      <img 
        src={cat} 
        alt="..." 
        style={{ width: '600px', height: '600px',  }} 
      />
    </div>
  )
}

export default Spinner