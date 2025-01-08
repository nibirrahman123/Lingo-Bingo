import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Authentication from "../pages/Authentication";
import Login from "../components/Login";
import Registration from "../components/Registration";
import StartLearning from "../pages/StartLearning";
import LessonsWord from "../pages/LessonsWord";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import MyProfile from "../pages/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import Root from "../Root";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../components/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>

            },
            {
                path: '/start_learning',
                element: <StartLearning></StartLearning>

            },
            {
                path: '/tutorials',
                element: <PrivateRoutes><Tutorials></Tutorials></PrivateRoutes>
            },
            {
                path: '/about_us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'my_profile',
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: '/update_profile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>

            },
            {
                path: '/lessons/:lesson_no',
                element: <PrivateRoutes><LessonsWord></LessonsWord></PrivateRoutes>,
                loader: () => fetch('./vocabulary.json')

            },
            {
                path: '/authentication',
                element: <Authentication></Authentication>,
                children: [
                    {
                        path: '/authentication',
                        element: <Login></Login>
                    },
                    {
                        path: '/authentication/register',
                        element: <Registration></Registration>
                    },
                    {
                        path: '/authentication/forget_password',
                        element:<ForgetPassword></ForgetPassword>
                    }
                ]
            }
        ]
    }
])

export default router;