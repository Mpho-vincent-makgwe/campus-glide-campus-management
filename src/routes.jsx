import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Campuses from './pages/Campuses';
import Referrals from './pages/Referrals';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
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
        element: <Login />,
      },
    ],
  },
]);

export default router;