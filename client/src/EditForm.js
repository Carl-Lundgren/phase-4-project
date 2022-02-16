import {useState} from "react"

function EditForm({blogPost, user, handleEdit, handleEditButtonClick}){
    const [text, setText] = useState(blogPost.text)
    const [tags, setTags] = useState(blogPost.tags)

    function handleSubmit(e){
        e.preventDefault()
        handleEditButtonClick()

        fetch(`/blog_posts/${blogPost.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                tags,
                user_id: user.id
            }),
        }).then ((r)=> r.json()).then(p=>handleEdit(p)) 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Edit your post </label>
                <input type="text" id="text" value={text} onChange={e=> setText(e.target.value)}/>
                <div></div>
                <label for="html"> Edit Tags </label>
                <input type="text" id="tags" value={tags} onChange={e=> setTags(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default EditForm