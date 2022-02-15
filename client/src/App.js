import './App.css';
import { Route, Switch } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import PostForm from './PostForm';
import {useEffect, useState} from 'react';
import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState(null)

  if (!user) return <LoginForm onLogin={setUser}/>

  return (
    <div className="App">
      <header className="App-header">
        <PostForm/>
        <BlogPosts/>
      </header>
    </div>
  );
}

export default App;
