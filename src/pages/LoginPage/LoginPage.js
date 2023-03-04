import { goToSignUpPage, goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"

function LoginPage(){
    const navigate = useNavigate()

    return(
        <>
          <h3>Página de Login</h3>
          <button onClick={()=>goToHomePage(navigate)}>Continuar</button>
          <button onClick={()=>goToSignUpPage(navigate)}>Crie uma conta</button>
        </>
    )
}

export default LoginPage