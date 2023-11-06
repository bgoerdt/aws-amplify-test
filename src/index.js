import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@aws-amplify/ui-react/styles.css';
import Home from './pages/Home';
import About from './pages/About';
import MyItems from './pages/MyItems';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
      region: 'us-west-2',
      userPoolId: 'us-west-2_yv4FMrCJ3',
      userPoolWebClientId: '4qb721ooi39g3re6fjt90cogis'
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/my-items",
    element: <MyItems />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
