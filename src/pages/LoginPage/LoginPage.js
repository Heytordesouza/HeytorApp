import { goToSignUpPage, goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { Main, ImgLogo, Title, SubTitle, Input, InputEmail, InputPassword, Button, Continue, CreateAccount, Line} from "./LoginPage.styled"
import { useState, useEffect } from "react"
import imgLogo from "../../assets/imgLogo.svg"
import line from "../../assets/line.svg"

function LoginPage(){
    const navigate = useNavigate()
    const [form, setForm] = useState({email:'', password:''})

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(()=>{
        const token = window.localStorage.getItem("TokenAPI_Labeddit")
        if(token){
            goToHomePage(navigate)
        }
        // eslint-disable-next-line
    },[])

    return(
        <Main> 
            <ImgLogo src={imgLogo} alt={"imgLogo"}/>
            <Title>LabEddit</Title>
            <SubTitle>O Projeto de rede social da Labenu</SubTitle>
            <Input>
                <InputEmail value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                <InputPassword value={form.password} name="password" onChange={onChangeForm} type="password" placeholder="Senha"/>
            </Input>
            <Button>
                <Continue onClick={()=>goToHomePage(navigate)}>Continuar</Continue>
                <Line src={line} alt={"line"}/>
                <CreateAccount onClick={()=>goToSignUpPage(navigate)}>Crie uma conta</CreateAccount>
            </Button>
        </Main>
    )
}

export default LoginPage