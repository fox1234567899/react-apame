import cat from '../../assets/hooks/orangecat.gif';
// import styles from './Footer.module.css'



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
          width: '400px',
          height: '400px',
        }}
      />
    </div>
  )
}

export default Spinner