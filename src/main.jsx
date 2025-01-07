import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import InputField from './component/Home/InputField.jsx'
import Container from './component/Home/Container.jsx'


const route = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='/' element={<InputField/>}/>
    <Route path = '/cards' element={<Container/>}/>
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>
)
