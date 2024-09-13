import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Second from './pages/Second.jsx'
import Third from './pages/Third.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    ErrorEvent: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/design-portfolio',
        element: <Second />,
      },
      {
        path: '/github-search',
        element: <Third />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router}/>)
