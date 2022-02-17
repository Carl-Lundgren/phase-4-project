import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import {useEffect, useState} from 'react';
import LoginForm from './LoginForm'
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    fetch('/me').then((r)=> {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <LoginForm setUser={setUser}/>

  return (
    <>
      <main>
        <NavBar setUser={setUser} user={user}/>
        <Routes>
          <Route path="/new-post" element={<PostForm user={user}/>} /> 
          <Route path="/" element={<BlogPosts user={user}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
