import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../LayOut/MainRoot';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Error from '../Pages/Error/Error';
import CheckOut from '../Pages/CheckoutPage/CheckOut';
import Booking from '../Pages/BookingPage/Booking';

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
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <Booking></Booking>,
                // loader: () => fetch(`http://localhost:5000/bookings?email=ridoygh51@gmail.com`)
            },

        ]
    },
]);

export default router;