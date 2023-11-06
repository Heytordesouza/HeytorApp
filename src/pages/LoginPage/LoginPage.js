import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../contexts/GlobalContext';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import {
    MainContainer, ImgLogo, Title, SubTitle, InputContainer,
    InputEmail, InputPassword, ButtonContainer, Continue, CreateAccount
} from "./LoginPage.styled";
import { goToSignUpPage, goToHomePage } from "../../router/Coordinator";
import { BASE_URL } from "../../constants/BASE_URL";
import logoImg from "../../assets/logoheytorapp.png";
import { Spinner } from '@chakra-ui/react';

export const LoginPage = () => {
    const context = useContext(GlobalContext)
    const { isLoading, setIsLoading } = context
    const { theme, toggleTheme } = useTheme();

    const navigate = useNavigate();

    const [form, setForm] = useState({ email: '', password: '' });

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

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
            console.log(response)
            setIsLoading(false);
            goToHomePage(navigate);

        } catch (error) {
            setIsLoading(false);
            console.error(error?.response?.data);
            window.alert(error?.response?.data);
        }
    };

    return (
        <MainContainer theme={theme}>
            <ThemeToggle onClick={toggleTheme} />
            <ImgLogo src={logoImg} alt={"logoImg"} />
            <Title>HeytorApp</Title>
            <SubTitle>O Projeto de rede social do Heytor</SubTitle>
            <InputContainer onSubmit={login} autoComplete="off">
                <InputEmail
                    value={form.email}
                    name="email"
                    onChange={onChangeForm}
                    placeholder="E-mail"
                    theme={theme}
                />
                <InputPassword
                    value={form.password}
                    name="password"
                    onChange={onChangeForm}
                    type="password"
                    placeholder="Senha"
                    theme={theme}
                />
            </InputContainer>
            <ButtonContainer>
                <Continue disabled={isLoading} onClick={login}>{isLoading ? <Spinner /> : "Continuar"}</Continue>
                <CreateAccount theme={theme} onClick={() => goToSignUpPage(navigate)}>Crie uma conta</CreateAccount>
            </ButtonContainer>
        </MainContainer>
    )
}