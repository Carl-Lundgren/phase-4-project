import React, {useState} from "react";
import SignUpForm from "./SignUpForm";

function LoginForm({setUser}) {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    }).then(r=>{
      if(r.ok){
        r.json().then(user => setUser(user))
      } else {
        r.json().then((error=> setError(error.error)))
      }
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
      {error ? <span>{error}</span>: null}
      <SignUpForm setUser={setUser}/>
    </div>
  );
}
  
  export default LoginForm;