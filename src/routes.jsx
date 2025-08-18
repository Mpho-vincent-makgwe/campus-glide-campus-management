import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';
import Campuses from './pages/Campuses';
import Referrals from './pages/Referrals';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/campuses',
        element: <Campuses />,
      },
      {
        path: '/campuses/new',
        element: <div>Add New Campus</div>,
      },
      {
        path: '/referrals',
        element: <Referrals />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;