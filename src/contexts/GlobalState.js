import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/BASE_URL"

export const GlobalState = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem("TokenApi-Labeddit");
    
        if (token) {
          fetchPosts();
        }
      }, []);
    
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/posts`,{
            headers: {
                Authorization: window.localStorage.getItem("TokenApi-Labeddit")
            }
          });
    
          setPosts(response.data);

        } catch (error) {
          console.log(error?.response?.data);
          window.alert(error?.response?.data);
        }
      };

    return{
      posts,
      setPosts,
      fetchPosts,
      isLoading,
      setIsLoading
    }
}