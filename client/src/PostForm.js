import {useState} from "react"

function PostForm({user}){
    const [text, setText] = useState("")
    const [tags, setTags] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setText("")
        setTags("")

        fetch("/blog_posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                tags,
                user_id: user.id
            }),
        }).then ((r)=> r.json()).then(data=>console.log(data)) 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Write your post here </label>
                <input type="text" id="text" value={text} onChange={e=> setText(e.target.value)}/>
                <div></div>
                <label for="html"> Add Tags </label>
                <input type="text" id="tags" value={tags} onChange={e=> setTags(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default PostForm