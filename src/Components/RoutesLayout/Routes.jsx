import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyEnrolledCourse from "../Pages/DashboardPages/MyEnrolledCourse";
import MyAddedCourse from "../Pages/DashboardPages/MyAddedCourse";
import AddCourse from "../Pages/DashboardPages/AddCourse";
import CoursesPage from "../Pages/CoursePage/CoursesPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/courses",
                Component: CoursesPage
            },
            {
                path: '/dashboard',
                element: <DashBoardLayout></DashBoardLayout>,
                children: [

                    {
                        index: true,
                        Component: MyEnrolledCourse,
                    },
                    {
                        path: "/dashboard/my_added_course",
                        Component: MyAddedCourse
                    },
                    {
                        path: "/dashboard/Add_course",
                        Component: AddCourse
                    }
                ]


            }
        ]
    },

]);
export default router;