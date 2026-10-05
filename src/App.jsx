import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { UsersPage, usersLoader } from './pages/Users';
import { UserDetailPage, userLoader } from './pages/UserDetail';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/users" replace />,
  },
  {
    path: '/users',
    element: <UsersPage />,
    loader: usersLoader,
  },
  {
    path: '/users/:id',
    element: <UserDetailPage />,
    loader: userLoader,
    errorElement: <ErrorPage />, // Перехватывает throw new Response(...)
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

