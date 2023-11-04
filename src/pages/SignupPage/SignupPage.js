import { goToHomePage } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { Header } from "../../components/Header/Header";
import { Main, Welcome, Input, InputUserName, InputEmail, InputPassword, ContainerSignup, Signup, Contract, CheckBox, ToAccept, Span, Label } from "./SignupPage.styled";
import { Spinner } from '@chakra-ui/react';
import { GlobalContext } from '../../contexts/GlobalContext';
import ThemeToggle from '../../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export const SignupPage = () => {
  const context = useContext(GlobalContext)
  const { isLoading, setIsLoading } = context
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  };

  const signup = async (event) => {
    event.preventDefault();
    setIsLoading(true)

    try {

      let body = {
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
  };

  return (
    <Main theme={theme}>
      <Header />
      <Welcome theme={theme}>Olá, boas vindas ao HeytorApp ;)</Welcome>
      <Input onSubmit={signup} autoComplete="off">
        <InputUserName
          value={form.name}
          name={"name"}
          onChange={onChangeForm}
          placeholder="Apelido"
          theme={theme}
        />
        <InputEmail
          value={form.email}
          name={"email"}
          onChange={onChangeForm}
          placeholder="E-mail"
          theme={theme}
        />
        <InputPassword
          value={form.password}
          name={"password"}
          onChange={onChangeForm}
          type={"password"}
          placeholder="Senha"
          theme={theme}
        />
      </Input>
      <Contract theme={theme}>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Política de Privacidade</a></Contract>
      <ToAccept>
        <Span theme={theme}>
          <CheckBox
            className="CheckBox"
            type="checkbox"
          />
          <Label theme={theme}>Eu concordo em receber e-mails sobre coisas legais do HeytorApp</Label>
        </Span>
      </ToAccept>
      <ContainerSignup  theme={theme}>
        <Signup onClick={signup}>{isLoading ? <Spinner /> : "Cadastrar"}</Signup>
      </ContainerSignup>
    </Main>
  )
}