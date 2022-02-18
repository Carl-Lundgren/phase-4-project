import React, {useState} from "react";

function SignUpForm({setUser}) {
  const [username, setUsername] = useState("")
  const [errors, setErrors] = useState ("")
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: username}),
    }).then(r=>{
      if(r.ok){
        r.json().then(user => setUser(user))
      } else {
        r.json().then((errors => setErrors(errors.errors)))
      }
    })
  }

  const displayError = ()=> {
    return errors.map(error => {
      return <div>{error}</div>
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
      {errors ? <span>{errors && displayError()}</span>: null}
    </div>
  );
}
  
  export default SignUpForm;