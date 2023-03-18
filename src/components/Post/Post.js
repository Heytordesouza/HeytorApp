import { useContext } from "react"
import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/BASE_URL"
import coment from "../../assets/coment.svg"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import { Article, PostMenu, SubText, TextButton } from "../PostModal/PostModal.styled"


function PostCard (props){
    const context = useContext(GlobalContext)

    const showPost = (postId)=>{
        context.setUrlPost(postId)
        context.setModal(true)
        context.setActionModal("post")
    }

    const likePost = async (postId)=>{
        try {
            let body = {
                like: 1,
            }

            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            props.browserPosts()

        } catch (error) {
            console.log(error)
        }
    }

    const dislikePost = async (postId)=>{
        try {
            let body = {
                like: 0,
            }

            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            props.browserPosts()

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Article>
            <SubText>Enviado por: {props.post.creator.username}</SubText>
            <p>{props.post.content}</p>
            <PostMenu>
                <TextButton>
                    <img src={like} onClick={()=>likePost(props.post.id)} alt="botão-like"/>
                    {props.post.likes}
                    <img src={dislike} onClick={()=>dislikePost(props.post.id)} alt="botão-dislike"/> 
                </TextButton> 
                <SubText className="subText" onClick={()=>showPost(props.post.id)}>
                    <img src={coment} alt="botão-comentários" />
                    {props.post.comments}
                </SubText>
            </PostMenu>
        </Article>
    )
}

export default PostCard