import React, {useState} from "react";

function SignUpForm({setUser}) {
  const [username, setUsername] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: username}),
    }).then(r=>{
      console.log(r)
      r.json().then(user => setUser(user))
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Sign up for an account with a new Username: </label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={e=> setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}
  
  export default SignUpForm;