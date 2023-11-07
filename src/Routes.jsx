import Home from './pages/HomePage/Home';
import Hero from './pages/Heroes/Hero';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

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
    path: 'Hero',
    element: <Hero />,
  },
]);

export default router;
