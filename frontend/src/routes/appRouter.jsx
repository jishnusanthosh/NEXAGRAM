import { createBrowserRouter } from "react-router-dom";
// import { AdminRoutes,AdminLogin } from "./admin/AdminRoutes";
import {userSignIn, userSignup,} from "./user/UserRoutes"

const appRouter = createBrowserRouter([
    userSignIn,
    userSignup,
    // userForgotPassword,
    // userRegister,
    // userRoutes,
    // verifyEmail,

    //admin routes
    //  AdminLogin,
    //  AdminRoutes

])


export default appRouter