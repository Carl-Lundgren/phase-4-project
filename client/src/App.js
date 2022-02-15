import './App.css';
import { Route, Switch } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import {useEffect, useState} from 'react';
import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState(null)

  function handleLogoutClick(){
    fetch("/logout", {method: "DELETE"}).then(r=>{
      setUser(null)
    })
  }

  if (!user) return <LoginForm setUser={setUser}/>

  return (
    <div className="App">
      <header className="App-header">
        <PostForm/>
        <BlogPosts/>
        <button onClick={handleLogoutClick}>Logout</button>
      </header>
    </div>
  );
}

export default App;
