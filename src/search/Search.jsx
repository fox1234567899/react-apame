import  {  useState } from 'react'
import { useNavigate ,  } from 'react-router-dom'
const Search = () => {
    const [query,setQuery] = useState("")
    const navigate= useNavigate()
    function searchEngine(e){
        e.preventDefault()
        
        if (!query.trim()) {
            navigate("/", { replace: true })
            return
        }
        navigate(`/search?q=${query}`)
    }
    
  return (
    <li>
        
        
    <div>
        <form onSubmit={searchEngine}>
       
        
        <input className='p-1' type="text" placeholder="Search"  value={query} onChange={(e)=>setQuery(e.target.value)}  required />
     
     
        <button className='btn  mb-2 mx-2' style={{padding:"5px" , backgroundColor:"var(--button-color)", color:"white"}} type="submit">
           Search
        </button>
       
        </form>
            
        </div>
    </li>
  )
}

export default Search

