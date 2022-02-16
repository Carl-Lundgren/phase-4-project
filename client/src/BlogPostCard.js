import React, {useState} from "react"
import EditForm from "./EditForm"

function BlogPostCard({blogPost, removePost, user, handleEdit}) {
    const [editForm, setEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show Edit Form")
    
    function handleDelete(blogPost){
        fetch(`/blog_posts/${blogPost.id}`, {method: "DELETE"}).then(r=>{
            removePost(blogPost)
        })
    }

    function handleEditButtonClick(){
        setEditForm(!editForm)
        if (editForm) {
            setEditButton('Show Edit Form')
        } else {
            setEditButton('Hide Edit Form')
        }
    }

    return(
        <div>
            <h1>Blog Post Card</h1>
            <h2>{blogPost.text}</h2>
            <p>{blogPost.tags}</p>
            <button onClick={e=> handleDelete(blogPost)}>Delete</button>
            <button onClick={handleEditButtonClick}>{editButton}</button>
            {editForm ? <EditForm blogPost={blogPost} user={user} handleEdit={handleEdit} handleEditButtonClick={handleEditButtonClick}/>: null}
        </div>
    )
}
  
export default BlogPostCard;