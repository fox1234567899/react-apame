import cat from '../../assets/hooks/orangecat.gif'
// import styles from './Footer.module.css'
import {ClipLoader} from 'react-spinners'



const Spinner = ({loading}) => {
  if(!loading) return null;
  return (
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <img
        src={cat}
        alt="Loading..."
        style={{
          width: '200px',
          height: '200px',
        }}
      />
    </div>
  )
}

export default Spinner