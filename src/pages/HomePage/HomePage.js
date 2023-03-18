import { goToLoginPage } from "../../router/Coordinator"
import { useNavigate } from "react-router-dom"


function HomePage(){
    const navigate = useNavigate()
    

    return(
      <>
       <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
      </>
  )
}

export default HomePage