import { useContext } from "react"
import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { BASE_URL } from "../../constants/BASE_URL"
import { CardContainer, PostMenu, SubText, TextButton, SubTextButton, Top } from "./Card.styled"
import { useNavigate } from "react-router-dom";
import { goToCommentPage } from "../../router/Coordinator";
import { DeleteIcon } from '@chakra-ui/icons';
import { useTheme } from '../../contexts/ThemeContext';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import likeDark from "../../assets/likedark.png"
import likeLight from "../../assets/likelight.png"
import disLikeDark from "../../assets/dislikedark.png"
import disLikeLight from "../../assets/dislikelight.png"
import commentDark from "../../assets/commentdark.png"
import commentLight from "../../assets/commentlight.png"

export const PostCard = (props) => {
    const context = useContext(GlobalContext)
    const { fetchPosts } = context
    const { theme } = useTheme();

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
            fetchPosts()
            toast.success("Post excluído com sucesso", {
                icon: "🗑️",
                theme: props.theme === 'dark' ? 'dark' : 'light',
                autoClose: 1500
            });

        } catch (error) {
            console.log(error)
            toast.error(error.response.data, {
                theme: props.theme === 'dark' ? 'dark' : 'light',
                autoClose: 1500
            });
        }
    }

    const likePost = async () => {
        try {
            let body = {
                like: 1,
            }

            await axios.put(`${BASE_URL}/posts/${post.id}/like`, body, {
                headers: {
                    Authorization: window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            fetchPosts();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    const dislikePost = async () => {
        try {
            let body = {
                like: 0,
            }

            await axios.put(`${BASE_URL}/posts/${post.id}/like`, body, {
                headers: {
                    Authorization: window.localStorage.getItem("TokenApi-Labeddit")
                }
            })

            fetchPosts();

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return (
        <CardContainer theme={theme}>
            <Top theme={theme}>
                <span>Enviado por: {post.creator.name}</span>
                <DeleteIcon color='red' cursor='pointer' width='25px' height='25px' onClick={deletePost} />
            </Top>
            <h1>{post.content}</h1>
            <PostMenu>
                <TextButton>
                    <SubTextButton onClick={likePost}>
                        <div>{theme === 'light' ?
                            (<img src={likeDark} alt="botão-like" />)
                            :
                            (<img src={likeLight} alt="botão-like" />)}
                        </div>
                        {post.likes}
                    </SubTextButton>
                    <SubTextButton onClick={dislikePost}>
                        <div>{theme === 'light' ?
                            (<img src={disLikeDark} alt="botão-dislike" />)
                            :
                            (<img src={disLikeLight} alt="botão-dislike" />)}
                        </div>
                        {post.dislikes}
                    </SubTextButton>
                </TextButton>
                <SubText onClick={() => goToCommentPage(navigate, post.id)}>
                    <div>{theme === 'light' ?
                        (<img src={commentDark} alt="botão-comment" />)
                        :
                        (<img src={commentLight} alt="botão-comment" />)}
                    </div>
                    {post.comments}
                </SubText>
            </PostMenu>
        </CardContainer>
    )
}