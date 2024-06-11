import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import Hero from '../components/Hero';
import ErrorPage from '../pages/ErrorPage';
import BreakingBad from '../pages/BreakingBad';
import GOT from '../pages/GOT';
import StrangerThings from '../pages/StrangerThings';
import Kingdom from '../pages/Kingdom';
import TheWitcher from '../pages/TheWitcher';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BreakingBad />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/breakingBad',
    element: <BreakingBad />,
  },
  {
    path: '/GOT',
    element: <GOT />,
  },
  {
    path: '/StrangerThings',
    element: <StrangerThings />,
  },
  {
    path: '/Kingdom',
    element: <Kingdom />,
  },
  {
    path: '/TheWitcher',
    element: <TheWitcher />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
