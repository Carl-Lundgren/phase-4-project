import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import {useEffect, useState} from 'react';
import LoginForm from './LoginForm'
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null)

  if (!user) return <LoginForm setUser={setUser}/>

  return (
    <>
      <main>
        <NavBar setUser={setUser}/>
        <Routes>
          <Route path="/new-post" element={<PostForm user={user}/>} /> 
          <Route path="/" element={<BlogPosts user={user}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
