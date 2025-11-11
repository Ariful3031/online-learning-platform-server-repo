import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyEnrolledCourse from "../Pages/DashboardPages/MyEnrolledPage/MyEnrolledCourse";
import MyAddedCourse from "../Pages/DashboardPages/AddedMyCoursesPage/MyAddedCourse";
import AddCourse from "../Pages/DashboardPages/AddCourse";
import CoursesPage from "../Pages/CoursePage/CoursesPage";
import ViewDetails from "../Pages/ViewDetailsPage/ViewDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EnrolledViewDetails from "../Pages/DashboardPages/MyEnrolledPage/EnrolledViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch(`http://localhost:3000/courses`),
                Component: HomePage,
            },
            {
                path: "/courses",
                loader: () => fetch(`http://localhost:3000/courses`),
                Component: CoursesPage
            },
            {
                path: '/courses/details/:id',
                element:
                    <PrivateRoute>
                        <ViewDetails></ViewDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`)

            },
 {
                        path: '/courses/enrolled/details/:id',
                        element: <EnrolledViewDetails></EnrolledViewDetails>,
                        loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`)
                    },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/dashboard',
                element:
                    <PrivateRoute>
                        <DashBoardLayout></DashBoardLayout>
                    </PrivateRoute>,
                children: [

                    {
                        path: '/dashboard/my_enrolled_course',
                        loader: () => fetch(`http://localhost:3000/courses`),
                        Component: MyEnrolledCourse
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