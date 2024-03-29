import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import { useTheme } from '../../contexts/ThemeContext';
import { goToLoginPage } from "../../router/Coordinator"
import { BASE_URL } from "../../constants/BASE_URL";
import { Container, PostContainer } from "./HomePage.styled";
import { Header } from "../../components/Header/Header"
import { PostCard } from "../../components/Card/PostCard";
import { Spinner } from '@chakra-ui/react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {

  const navigate = useNavigate()

  const context = useContext(GlobalContext);
  const { theme } = useTheme();

  const { posts, fetchPosts, isLoading, setIsLoading } = context;
  const [content, setContent] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, [fetchPosts, navigate]);

  const createPost = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
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

  return (
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
          <button disabled={isLoading} onClick={createPost}>{isLoading ? <Spinner /> : "Postar"}</button>
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