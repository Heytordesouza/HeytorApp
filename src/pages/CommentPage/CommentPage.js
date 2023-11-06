import axios from "axios";
import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useTheme } from '../../contexts/ThemeContext';
import { CardContainer, PostMenu, SubText, TextButton, SubTextButton } from "../../components/Card/Card.styled";
import { Container, PostContainer } from "./CommentPage.styled";
import { goToLoginPage } from "../../router/Coordinator"
import { Header } from "../../components/Header/Header";
import { CommentCard } from "../../components/Card/CommentCard";
import { Spinner } from '@chakra-ui/react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import coment from "../../assets/coment.svg"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"

export const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { theme } = useTheme();

  const { posts, fetchPosts, isLoading, setIsLoading } = context;

  const fetchComments = useCallback(async () => {

    try {
      const response = await axios.get(`${BASE_URL}/comments/${params.postId}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
          },
        }
      );

      setComments(response.data);

    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }, [params.postId]);

  const createComment = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const body = {
        content: content,
      };

      await axios.post(`${BASE_URL}/comments/${params.postId}/post`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });

      setContent("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      toast.error(error?.response?.data, {
        theme: theme === 'dark' ? 'dark' : 'light',
        autoClose: 1500
      });
    }
  };

  const likePost = async () => {
    try {
      const body = {
        like: 1,
      };

      await axios.put(`${BASE_URL}/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });

      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const dislikePost = async () => {
    try {
      const body = {
        like: 0,
      };

      await axios.put(`${BASE_URL}/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });

      fetchPosts();

    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
      fetchComments();
    }
  }, [comments, fetchComments, fetchPosts, navigate]);

  const post = posts.find((post) => post.id === params.postId);

  return (
    <Container theme={theme}>
      <Header />
      <CardContainer theme={theme}>
        <p>Enviado por: {post?.creator.name}</p>
        <h1>{post?.content}</h1>
        <PostMenu theme={theme}>
          <TextButton>
            <SubTextButton onClick={likePost}>
              <img src={like} alt="like" />
              {post?.likes}
            </SubTextButton>
            <SubTextButton onClick={dislikePost}>
              <img src={dislike} alt="dislike" />
              {post?.dislikes}
            </SubTextButton>
          </TextButton>
          <SubText>
            <span>
              <img src={coment} alt="coment" />
            </span>
            {post?.comment}
          </SubText>
        </PostMenu>
      </CardContainer>
      <PostContainer theme={theme}>
        <form onSubmit={createComment}>
          <section>
            <textarea
              maxLength={150}
              type="text"
              wrap="hard"
              placeholder="Escreva seu comentário..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </section>
          <button disabled={isLoading} onClick={createComment}>{isLoading ? <Spinner /> : "Responder"}</button>
        </form>
      </PostContainer>

      <section >
        {comments &&
          comments.map((comment) => {
            return <CommentCard theme={theme} key={comment.id} fetchComments={fetchComments} comment={comment} />;
          })}
      </section>
    </Container>
  )
}