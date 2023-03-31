import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardContainer, PostMenu, SubText, TextButton } from "../../components/Card/Card.styled";
import { goToLoginPage } from "../../router/Coordinator"
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, PostContainer } from "./CommentPage.styled";
import { CommentCard } from "../../components/Card/CommentCard";
import coment from "../../assets/coment.svg"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"

export const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const { posts, fetchPosts } = context;

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
      fetchComments();
    }
  }, [comments]);

  const fetchComments = async () => {

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
  };

  const createComment = async (event) => {
    event.preventDefault();

    try {
      const body = {
        content: content,
      };

      await axios.post(`${BASE_URL}/comments/${params.postId}/post`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });

      setContent("");
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
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
  
  const post = posts.find((post) => post.id === params.postId);

  return(
    <Container>
    <Header />
    <CardContainer>
      <p>Enviado por: {post?.creator.name}</p>
      <h1>{post?.content}</h1>
      <PostMenu>
        <TextButton>
          <span onClick={likePost}>
            <img src={like} />
            {post?.likes}
          </span>
          <span onClick={dislikePost}>
            <img src={dislike} />
            {post?.dislikes}
          </span>
        </TextButton>
        <SubText>
          <span>
            <img src={coment} />
          </span>
          {post?.comment}
        </SubText>
      </PostMenu>
    </CardContainer>
    <PostContainer>
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
        <button>Responder</button>
      </form>
    </PostContainer>

    <section>
      {comments &&
        comments.map((comment) => {
          return <CommentCard key={comment.id} fetchComments={fetchComments} comment={comment} />;
        })}
    </section>
    </Container>
  )
}