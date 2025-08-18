// src/router.js
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage';
import Campuses from './pages/Campuses';
import Referrals from './pages/Referrals';
import LoginPage from './pages/LoginPage';
import CampusSettings from './pages/CampusSettings';

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
        path: '/campuses/settings',
        element: <CampusSettings />,
      },
      {
        path: '/campuses/settings/:campusId',
        element: <CampusSettings />,
      },
      {
        path: '/campuses/settings/new',
        element: <CampusSettings isNew={true} />,
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