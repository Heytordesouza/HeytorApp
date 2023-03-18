import { goToHomePage, goToLoginPage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import imgLogo from "../../assets/imgLogo.svg"
import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { Main, Header, Container, ImgLogo, ButtonLogin, Welcome, Input, InputUserName, InputEmail, InputPassword, Signup, Contract, CheckBox, ToAccept, Span, Label  } from "./SignupPage.styled"

function SignupPage(){
    const navigate = useNavigate()

    const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
  }) 


  const onChangeForm = (event)=>{
      setForm({ ...form, [event.target.name]: event.target.value })
  }

  
  const signUp = async ()=>{
      try {

          let body ={
              name: form.name,
              email: form.email,
              password: form.password,
          }

          const response = await axios.post(`${BASE_URL}/users/signup`, body)
          window.localStorage.setItem("TokenApi-Labeddit", response.data.token)
          goToHomePage(navigate)

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
          <Welcome>Olá, boas vindas ao LabEddit ;)</Welcome>
          <Input>
            <InputUserName value={form.name} name="name" onChange={onChangeForm} placeholder="Apelido"/>
            <InputEmail value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
            <InputPassword value={form.password} name="password" onChange={onChangeForm} type="password" placeholder="Senha"/>
          </Input>
          <Contract>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Política de Privacidade</a></Contract>
                    <ToAccept>
                        <Span>
                            <CheckBox className="CheckBox" type="checkbox"/>
                            <Label>Eu concordo em receber e-mails sobre coisas legais no Labeddit</Label>
                        </Span>
                    </ToAccept>
          <Signup onClick={()=>signUp()}>Cadastrar</Signup>
        </Main>
    )
}

export default SignupPage