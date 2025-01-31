import { Link } from "react-router-dom"

function Navbar() {

    return (
        
             <div className="nav">
               <Link to={"/"} > Home </Link>
                <Link to={"/men"} > Men </Link> 
              <Link to={"/women"} > Women </Link> 
               <Link to={"/kids"} > Kids </Link> 
                <Link to={"/beauty"} > Beauty </Link> 

           </div>

        
    )
} 

export default Navbar