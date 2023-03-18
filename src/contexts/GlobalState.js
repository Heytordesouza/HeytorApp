import { useState} from "react"

function GlobalState(){

    const [posts, setPosts] = useState([])

    const [urlPost, setUrlPost] = useState('')

    const [loading, setLoading] = useState(false)

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        loading, 
        setLoading,
    }
}


export default GlobalState