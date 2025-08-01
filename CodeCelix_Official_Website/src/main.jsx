import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Services from './components/Services.jsx';
import ServicesPage from './components/ServicesDetail.jsx';
import DiscussProject from './components/DiscussProject.jsx';
import PortfolioPage from './portfolio/PortfolioPage.jsx';
import ContactDetail from './components/ContactDetail.jsx';
import PrivacyAndPolicy from './components/PrivacyAndPolicy.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services2',
        element: <ServicesPage/>,
      },
      {
        path: '/discussproject',
        element: <DiscussProject/>,
      }
        path: '/portfolioDetail',
        element: <PortfolioPage />,
      }
      {
        path: '/contact',
        element: <ContactDetail />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
