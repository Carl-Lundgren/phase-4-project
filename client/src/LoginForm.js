import React, {useState} from "react";
import SignUpForm from "./SignUpForm";

function LoginForm({setUser}) {
  const [username, setUsername] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    }).then(r=>{
      r.json().then(user => setUser(user))
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Login with your Username: </label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={e=> setUsername(e.target.value)}
        />
      </form>
      <SignUpForm setUser={setUser}/>
    </div>
  );
}
  
  export default LoginForm;