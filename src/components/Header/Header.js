import imgLogo from "../../assets/imgLogo.svg"
import { HeaderStyled, Container, ImgLogo, ButtonLogin, ButtonClose } from "./Header.styled"
import { goToLoginPage } from "../../router/Coordinator"
import { useNavigate, useLocation } from "react-router-dom"
import close from "../../assets/close.svg"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

    const closeModal = ()=>{
        context.setModal(false)
        context.setActionModal("")
        context.setUrlPost('')
    }

    const logOut = ()=>{
        context.setModal(false)
        context.setActionModal("")
        localStorage.clear()
        goToLoginPage(navigate)
    }

    return (
        <HeaderStyled>
            <Container>
                <ButtonClose>
                    {context.modal && context.actionModal ==="post" ?
                    <img src={close} alt="close-botton" onClick={()=>closeModal()}/>
                    :
                    ''}              
                </ButtonClose>
                <ImgLogo src={imgLogo} alt={"imgLogo"}/>
                <ButtonLogin> {location.pathname === "/signup"?
                    <h2><a onClick={()=>goToLoginPage(navigate)}>Entrar</a></h2>
                    :
                    <h2><a onClick={()=>logOut()}>Logout</a></h2>}
                </ButtonLogin> 
            </Container>
        </HeaderStyled> 
    )
}

export default Header