import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";

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
]);
export default router;