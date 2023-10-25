import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../LayOut/MainRoot';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default router;