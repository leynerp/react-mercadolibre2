
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CategoryPage} from "./pages/CategoryPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
        //errorElement: <ErrorPage />,
    },
    {
        path: "/:category",
        element: <CategoryPage />
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
        <RouterProvider router={router} />
)
