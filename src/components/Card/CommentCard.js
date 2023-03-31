import { useContext, useState } from "react"
import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/BASE_URL"
import Imglike from "../../assets/like.svg"
import Imgdislike from "../../assets/dislike.svg"
import { CardContainer, PostMenu, TextButton } from "./Card.styled"
import { useNavigate } from "react-router-dom";

export const CommentCard = (props) => {
    const context = useContext(GlobalContext)

    const { comment, fetchComments } = props
    const navigate = useNavigate()

    const [like, setlike] = useState(comment.likes)
    const [dislike, setDislike] = useState(comment.dislikes)

    const likeComment = async ()=>{
        try {
            let body = {
                like: 1,
            }

            await axios.put(`${BASE_URL}/comments/${comment.id}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            // if (like) {
            //     setlike(like + 1)
            // }

            fetchComments();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    const dislikeComment = async ()=>{
        try {
            let body = {
                like: 0,
            }

            await axios.put(`${BASE_URL}/comments/${comment.id}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            // if (!dislike) {
            //     setDislike(dislike + 1)
            // }

            fetchComments();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return(
        <CardContainer>
            <p>Enviado por: {comment.creator.name}</p>
            <h1>{comment.content}</h1>
            <PostMenu>
                <TextButton>
                    <span onClick={() => likeComment()}>
                        <img src={Imglike} alt="botão-like"/>
                        {comment.likes}
                    </span>
                    <span onClick={() => dislikeComment()}>
                        <img src={Imgdislike} alt="botão-dislike"/> 
                        {comment.dislikes}
                    </span>
                </TextButton> 
            </PostMenu>
        </CardContainer>
    )
}