import { goToLoginPage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate()

    return(
        <>
          <h3>Postagens</h3>
          <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
        </>
    )
}

export default HomePage