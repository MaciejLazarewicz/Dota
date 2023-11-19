import Home from './pages/HomePage/Home';
import Heroes from './pages/Heroes/Heroes';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Hero from './pages/Hero/Hero';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Heroes',
    element: <Heroes />,
  },
  {
    path: '/Hero/:name',
    element: <Hero />,
  },
]);

export default router;
