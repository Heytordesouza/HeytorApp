import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { goToLoginPage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { Container, PostContainer } from "./HomePage.styled";
import { Header } from "../../components/Header/Header"
import { PostCard } from "../../components/Card/PostCard";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useTheme } from '../../contexts/ThemeContext';

export const HomePage = () => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext);
  const { theme, toggleTheme } = useTheme();

  const { posts, fetchPosts } = context;
  const [ content, setContent ] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPost = async (event) => {
    event.preventDefault();

    try {
      const body = {
        content: content,
      };

      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: window.localStorage.getItem("TokenApi-Labeddit"),
        },
      });

      setContent("");
      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }

  };
    
  return(
    <Container theme={theme}>
    <Header />
    <PostContainer theme={theme}>
      <form onSubmit={createPost}>
        <section>
          <textarea
          maxLength={150}
          type="text"
          wrap="hard"
          placeholder="Escreva seu post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          theme={theme}
          />
        </section>
        <button>Postar</button>
      </form>
    </PostContainer>


    <section>
      {posts && posts.map((post) => {
        return <PostCard theme={theme} key={post.id} post={post} />;
      })}
    </section>
    </Container>
  )
}