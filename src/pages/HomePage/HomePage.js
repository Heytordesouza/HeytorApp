import { goToLoginPage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import imgLogo from "../../assets/imgLogo.svg"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import {GlobalContext} from "../../contexts/GlobalContext"
import Header from "../../components/Header/Header"
import { Main, Container, ImgLogo, ButtonLogin, CreatePost, ButtonPost } from "./HomePage.styled"

function HomePage(){
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const [content, setContent] = useState('') 

    useEffect(()=>{
      browserPosts()
    },[])

    useEffect(()=>{
      const token = window.localStorage.getItem("TokenApi-Labeddit")
      if(!token){
          goToLoginPage(navigate)
      }
    },[])

  const browserPosts = async()=>{
    try {
        context.setLoading(true)
        const response = await axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: window.localStorage.getItem("TokenAPI-Labeddit")
            }
        }) 
        context.setPosts(response.data)
        context.setLoading(false)
    } catch (error) {
        console.log(error)
        context.setLoading(false)
    }
}

  const insertPost = async () =>{
    try {  

        let body = {
            content,
        }

        await axios.post(`${BASE_URL}/posts`, body, {
            headers:{
                Authorization: window.localStorage.getItem("TokenAPI-Labeddit")
            }
        })  
        browserPosts() 
        setContent('')        
    } catch (error) {
        console.log(error)
    }
}

    return(
        <Main>
          <Header>
            <Container>
              <ImgLogo src={imgLogo} alt={"imgLogo"}/>
              <ButtonLogin onClick={()=>goToLoginPage(navigate)}>Entrar</ButtonLogin> 
            </Container>
          </Header>
          <CreatePost value={content} onChange={(event)=>setContent(event.target.value)} placeholder="Escreva seu post..."/>
          <ButtonPost onClick={()=>insertPost()}>Postar</ButtonPost>
        </Main>
    )
}

export default HomePage