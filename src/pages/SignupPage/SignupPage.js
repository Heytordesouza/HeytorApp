import { goToHomePage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"

function SignupPage(){
    const navigate = useNavigate()

    return(
        <>
          <h3>Criar Cadastro</h3>
          <button onClick={()=>goToHomePage(navigate)}>Cadastrar</button>
        </>
    )
}

export default SignupPage