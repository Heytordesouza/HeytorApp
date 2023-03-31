import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {SignupPage} from "../pages/SignupPage/SignupPage";
import {HomePage} from "../pages/HomePage/HomePage";
import {CommentPage} from "../pages/CommentPage/CommentPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/comments/:postId" element={<CommentPage />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router