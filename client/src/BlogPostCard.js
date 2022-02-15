function BlogPostCard({blogPost, removePost}) {
    function handleDelete(blogPost){
        fetch(`/blog_posts/${blogPost.id}`, {method: "DELETE"}).then(r=>{
            removePost(blogPost)
        })
    }


    return(
        <div>
            <h1>Blog Post Card</h1>
            <h2>{blogPost.text}</h2>
            <p>{blogPost.tags}</p>
            <button onClick={e=> handleDelete(blogPost)}>Delete</button>
        </div>
    )
}
  
export default BlogPostCard;