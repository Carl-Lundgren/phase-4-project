import React, {useEffect, useState} from "react"
import BlogPostCard from "./BlogPostCard"

function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(()=>{
        fetch('/blog_posts')
            .then((r) => r.json())
            .then((data) => setBlogPosts(data))
    }, [])

    function removePost(blogPost) {
        setBlogPosts((blogPosts)=> blogPosts.filter(t=> t.id !== blogPost.id))
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            {blogPosts.map((post) => <BlogPostCard blogPost={post} key={post.id} removePost={removePost}/>)}
        </div>
    );
}
  
export default BlogPosts;