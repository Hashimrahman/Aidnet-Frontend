import { Route, Routes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} >
              {route.children?.map((childRoute, childIndex) => (
                <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
