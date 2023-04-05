import { useContext } from "react"
import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/BASE_URL"
import coment from "../../assets/coment.svg"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import { CardContainer, PostMenu, SubText, TextButton, SubTextButton, Top } from "./Card.styled"
import { useNavigate } from "react-router-dom";
import { goToCommentPage } from "../../router/Coordinator";
import { DeleteIcon } from '@chakra-ui/icons'

export const PostCard = (props) => {
    const context = useContext(GlobalContext)
    const { fetchPosts } = context

    const { post } = props
    const navigate = useNavigate()

    const deletePost = async () => {
        try {
          const body = {
            headers: {
              Authorization: window.localStorage.getItem("TokenApi-Labeddit")
            }
          }
    
          await axios.delete(`${BASE_URL}/posts/${post.id}`, body)
          alert("Post excluído com sucesso")
          fetchPosts()
    
        } catch (error) {
          console.log(error)
          alert(error.response.data)
        }
      }

    const likePost = async ()=>{
        try {
            let body = {
                like: 1,
            }

            await axios.put(`${BASE_URL}/posts/${post.id}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            fetchPosts();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    const dislikePost = async ()=>{
        try {
            let body = {
                like: 0,
            }

            await axios.put(`${BASE_URL}/posts/${post.id}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            fetchPosts();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return(
        <CardContainer>
            <Top>
                <p>Enviado por: {post.creator.name}</p>
                <DeleteIcon color='red' cursor='pointer' onClick={deletePost} />
            </Top>
            <h1>{post.content}</h1>
            <PostMenu>
                <TextButton>
                    <SubTextButton onClick={likePost}>
                        <img src={like} alt="botão-like"/>
                        {post.likes}
                    </SubTextButton>
                    <SubTextButton onClick={dislikePost}>
                        <img src={dislike}  alt="botão-dislike"/> 
                        {post.dislikes}
                    </SubTextButton>
                </TextButton> 
                <SubText>
                    <span onClick={() => goToCommentPage(navigate, post.id)}>
                        <img src={coment} alt="botão-comentários" />
                    </span>
                    {post.comments}
                </SubText>
            </PostMenu>
        </CardContainer>
    )
}