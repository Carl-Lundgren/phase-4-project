import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import {useEffect, useState} from 'react';
import LoginForm from './LoginForm'
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null)

  function handleLogoutClick(){
    fetch("/logout", {method: "DELETE"}).then(r=>{
      setUser(null)
    })
  }

  if (!user) return <LoginForm setUser={setUser}/>

  return (
    <>
      <main>
        <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/your-posts" element={<PostForm user={user}/>} /> 
          <Route path="/" element={<BlogPosts/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
