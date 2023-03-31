export const goToLoginPage = (navigate)=>{
    navigate("/login")
}

export const goToSignUpPage = (navigate)=>{
    navigate("/signup")
}

export const goToHomePage = (navigate)=>{
    navigate("/")
}

export const goToCommentPage = (navigate, id)=>{
    navigate(`/comments/${id}`)
}