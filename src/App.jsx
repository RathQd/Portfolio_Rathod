import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Homepage from './Pages/Homepage';

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element = {<Homepage/>} />
      </Route>
    )
  );


  return <RouterProvider router={router} />
}

export default App
