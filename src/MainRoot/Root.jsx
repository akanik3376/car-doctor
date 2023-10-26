import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../LayOut/MainRoot';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Error from '../Pages/Error/Error';
import CheckOut from '../Pages/CheckoutPage/CheckOut';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
        ]
    },
]);

export default router;