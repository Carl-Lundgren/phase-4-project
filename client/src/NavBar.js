import { Link } from 'react-router-dom'

function NavBar({setUser, user}) { 
    function handleLogoutClick(){
      fetch("/logout", {method: "DELETE"}).then(r=>{
        setUser(null)
      })
    }

    const header = {
        display: "flex",
        background: "#000",
        height: "5rem",
        padding: "1rem",
      }
  
    return (
      <div style={header}>
        <Link to="/" style={{padding: "14px", fontSize: "xxx-large", color:"#fff"}}>
            Home
        </Link>
        <Link to="/new-post" style={{padding: "28px", fontSize: "xx-large", color:"#fff"}}>
            Write A New Post
        </Link>  
        <p style={{padding: "12px", fontSize: "x-large", color:"#fff"}}>You are currently logged in as {user.username}</p>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    );
  }
  
  export default NavBar;