import { goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { Header } from "../../components/Header/Header"
import { Main, Welcome, Input, InputUserName, InputEmail, InputPassword, Signup, Contract, CheckBox, ToAccept, Span, Label  } from "./SignupPage.styled"
import { Spinner } from '@chakra-ui/react';
import { GlobalContext } from '../../contexts/GlobalContext'

export const SignupPage = () => {
  const context = useContext(GlobalContext)
  const {isLoading, setIsLoading} = context

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  }) 

  // const [showPassword, setShowPassword] = useState(false);

  const onChangeForm = (event)=>{
      setForm({ ...form, [event.target.name]: event.target.value })
  }

  
  const signup = async (event)=>{
    event.preventDefault();
    setIsLoading(true)

      try {

        let body ={
          name: form.name,
          email: form.email,
          password: form.password,
        }

        const response = await axios.post(`${BASE_URL}/users/signup`, body);
        window.localStorage.setItem("TokenApi-Labeddit", response.data.token);
        setIsLoading(false)
        goToHomePage(navigate);

      } catch (error) {
        setIsLoading(false)
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
  }

    return(
        <Main>
          <Header />
          <Welcome>Olá, boas vindas ao LabEddit ;)</Welcome>
          <Input onSubmit={signup} autoComplete="off">
            <InputUserName 
              value={form.name} 
              name={"name"} 
              onChange={onChangeForm} 
              placeholder="Apelido"
            />
            <InputEmail 
              value={form.email} 
              name={"email"}
              onChange={onChangeForm} 
              placeholder="E-mail"
            />
            <InputPassword 
              value={form.password} 
              name={"password"}
              onChange={onChangeForm} 
              type={"text"} 
              placeholder="Senha"
            />
          </Input>
          <Contract>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Política de Privacidade</a></Contract>
                    <ToAccept>
                        <Span>
                            <CheckBox 
                              className="CheckBox" 
                              type="checkbox" 
                              // value={showPassword}
                              // onChange={() => setShowPassword(!showPassword)}
                            />
                            <Label>Eu concordo em receber e-mails sobre coisas legais no Labeddit</Label>
                        </Span>
                    </ToAccept>
          <Signup onClick={signup}>{isLoading ? <Spinner /> : "Cadastrar"}</Signup>
        </Main>
    )
}