import axios from "axios";
import { goToSignUpPage, goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { Main, ImgLogo, Title, SubTitle, Input, InputEmail, InputPassword, Button, Continue, CreateAccount, Line} from "./LoginPage.styled"
import React, { useContext, useState } from "react"
import imgLogo from "../../assets/imgLogo.svg"
import line from "../../assets/line.svg"
import { BASE_URL } from "../../constants/BASE_URL";
import { Spinner } from '@chakra-ui/react';
import { GlobalContext } from '../../contexts/GlobalContext'

export const LoginPage = () => {
    const context = useContext(GlobalContext)
    const {isLoading, setIsLoading} = context

    const navigate = useNavigate()

    const [form, setForm] = useState({email:'', password:''})
    const [showPassword, setShowPassword] = useState(false)

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const login = async (event) => {
        event.preventDefault();
    
        try {
          setIsLoading(true);
    
          const body = {
            email: form.email,
            password: form.password,
          };
    
          const response = await axios.post(`${BASE_URL}/users/login`, body);
          window.localStorage.setItem("TokenApi-Labeddit", response.data.token);
    
          setIsLoading(false);
          goToHomePage(navigate);

        } catch (error) {

          setIsLoading(false);
          console.error(error?.response?.data);
          window.alert(error?.response?.data);
        }
      };

    return(
        <Main> 
            <ImgLogo src={imgLogo} alt={"imgLogo"}/>
            <Title>LabEddit</Title>
            <SubTitle>O Projeto de rede social da Labenu</SubTitle>
            <Input onSubmit={login} autoComplete="off">
                <InputEmail 
                    value={form.email} 
                    name="email" 
                    onChange={onChangeForm} 
                    placeholder="E-mail"
                />
                <InputPassword 
                    value={form.password} 
                    name="password" 
                    onChange={onChangeForm} 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Senha"
                />
            </Input>
            <Button>
                <Continue disabled={isLoading} onClick={login}>{isLoading ? <Spinner /> : "Continuar"}</Continue>
                <Line src={line} alt={"line"}/>
                <CreateAccount onClick={()=>goToSignUpPage(navigate)}>Crie uma conta</CreateAccount>
            </Button>
        </Main>
    )
}