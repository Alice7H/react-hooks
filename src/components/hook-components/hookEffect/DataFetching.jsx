import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default  function DataFetching() {

    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    // useEffect( () => {

    //     axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //     .then( res => {
    //         console.log(res)
    //         setPosts(res.data)
    //     })
    //     .catch( err => {
    //         console.log(err)
    //     })

    // }, [])

    useEffect( () => {
        // from input
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // from button
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        })
        .catch( err => {
            console.log(err)
        })

    }, [idFromButtonClick]) 
    // button idFormButtonClick is dependency 
    // input  id  is dependency

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch post</button>
            
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}
