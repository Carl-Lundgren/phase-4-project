function BlogPostCard({blogPost}) {
    return(
        <div>
            <h1>Blog Post Card</h1>
            <h2>{blogPost.text}</h2>
            <p>{blogPost.tags}</p>
        </div>
    )
}
  
export default BlogPostCard;