import { goToSignUpPage, goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { Main, ImgLogo, Title, SubTitle, InputEmail, InputPassword, Continue} from "./LoginPage.Styled"
import { useState, useEffect } from "react"
import imgLogo from "../../assets/imgLogo.svg"
import continuar from "../../assets/continuar.svg"

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
    },[])

    return(
        <Main> 
            <ImgLogo src={imgLogo} alt={"imgLogo"}/>
            <Title>LabEddit</Title>
            <SubTitle>O Projeto de rede social da Labenu</SubTitle>
            <InputEmail value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
            <InputPassword value={form.password} name="password" onChange={onChangeForm} type="password" placeholder="Senha"/>
            <Continue onClick={()=>goToHomePage(navigate)}>Continuar</Continue>
            <button onClick={()=>goToSignUpPage(navigate)}>Crie uma conta</button>
        </Main>
    )
}

export default LoginPage