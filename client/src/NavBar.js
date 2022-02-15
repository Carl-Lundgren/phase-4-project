import { Link } from 'react-router-dom'

function NavBar() { 
    function handleLogoutClick(setUser){
      fetch("/logout", {method: "DELETE"}).then(r=>{
        setUser(null)
      })
    }

    const header = {
        display: "flex",
        background: "#ADD8E6",
        height: "5rem",
        padding: "1rem",
      }
  
    return (
      <div style={header}>
        <Link to="/" style={{padding: "14px", fontSize: "xxx-large", color:"#fff"}}>
            Home
        </Link>
        <Link to="/your-posts" style={{padding: "28px", fontSize: "xx-large", color:"#fff"}}>
            Manage Your Posts
        </Link>  
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    );
  }
  
  export default NavBar;