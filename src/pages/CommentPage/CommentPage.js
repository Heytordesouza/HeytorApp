import { goToLoginPage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"

function CommentPage(){
    const navigate = useNavigate()

    return(
        <>
          <h3>Comentar Postagem</h3>
          <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
        </>
    )
}

export default CommentPage