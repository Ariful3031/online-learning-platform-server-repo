import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import DashBoardLayout from "./Layout/DashBoardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>

    }
]);
export default router;