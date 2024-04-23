import { type FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>,
  },
])

export const App: FC = () => {
  return <RouterProvider router={router} />
}
