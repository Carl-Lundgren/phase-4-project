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
        console.log(`${blogPost.user.id}`)
        console.log(`${user.id}`)
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
            {(user.id === blogPost.user.id) ?(<button onClick={e=> handleDelete(blogPost)}>Delete</button>):null}
            {(user.id === blogPost.user.id) ?(<button onClick={handleEditButtonClick}>{editButton}</button>):null}
            {editForm ? <EditForm blogPost={blogPost} user={user} handleEdit={handleEdit} handleEditButtonClick={handleEditButtonClick}/>: null}
        </div>
    )
}
  
export default BlogPostCard;