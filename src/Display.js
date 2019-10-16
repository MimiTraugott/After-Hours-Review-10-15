import React from 'react'

export default function Display (props){
    // let props.post = props
    const mappedPosts = props.posts.map( posts=> (
        <div>
            <h3>{posts.title}</h3>
            <img src={posts.imageUrl}/>
            <p>{posts.content}</p>
            <button onClick={()=> props.delete(posts.id)}>X</button>
        </div>
    ))
    return(
        <div>
            {mappedPosts}
            
        </div>
        

    )
}