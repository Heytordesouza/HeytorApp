import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import Imglike from "../../assets/like.svg"
import Imgdislike from "../../assets/dislike.svg"
import { CardContainer, PostMenu, TextButton, SubTextButton, Top } from "./Card.styled"
import { DeleteIcon } from '@chakra-ui/icons'
import { useTheme } from '../../contexts/ThemeContext';

export const CommentCard = (props) => {

    const { comment, fetchComments } = props
    const { theme, toggleTheme } = useTheme();

    const deleteComment = async () => {
        try {
          const body = {
            headers: {
              Authorization: window.localStorage.getItem("TokenApi-Labeddit")
            }
          }
    
          await axios.delete(`${BASE_URL}/comments/${comment.id}`, body)
          alert("Comentário excluído com sucesso")
          fetchComments()
    
        } catch (error) {
          console.log(error)
          alert(error.response.data)
        }
    }

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

            fetchComments();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return(
        <CardContainer theme={theme}>
            <Top theme={theme}>
                <span>Enviado por: {comment.creator.name}</span>
                <DeleteIcon color='red' cursor='pointer' onClick={deleteComment} />
            </Top>
            <h1>{comment.content}</h1>
            <PostMenu>
                <TextButton>
                    <SubTextButton onClick={() => likeComment()}>
                        <img src={Imglike} alt="botão-like"/>
                        {comment.likes}
                    </SubTextButton>
                    <SubTextButton onClick={() => dislikeComment()}>
                        <img src={Imgdislike} alt="botão-dislike"/> 
                        {comment.dislikes}
                    </SubTextButton>
                </TextButton> 
            </PostMenu>
        </CardContainer>
    )
}