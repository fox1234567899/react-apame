import cat from '../../assets/hooks/orangecat.gif'
// import styles from './Footer.module.css'
import {ClipLoader} from 'react-spinners'



const Spinner = ({loading}) => {
  if(!loading) return null;
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"100vh", backgroundColor:'var(--text-color)', marginTop:"50px"}}>
      <ClipLoader 
        color="green"
        loading={loading}
        cssOverride={{ width: '600px', height: '600px' }}
         aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner