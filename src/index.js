import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css';
import App from './App';
import ErrorPage from "./error-page";
import { BrowserRouter } from "react-router-dom"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "new",
//         element: <p>New</p>,
//       },
//       {
//         path: "new2",
//         element: <p>New 2222222</p>,
//       },
//     ],
//   },
//   // {
//   //   path: "/favorites",
//   //   element: <p>fav</p>,
//   // },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
