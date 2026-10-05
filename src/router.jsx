import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UsersPage, { usersLoader } from "./pages/UsersPage";
import UserDetailPage, { userDetailLoader } from "./pages/UserDetailPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: 'users/:id', 
        element: <UserDetailPage />,
        loader: userDetailLoader,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);