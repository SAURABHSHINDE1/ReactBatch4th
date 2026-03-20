import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/test'
import About from './pages/About'
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Service from './pages/Service';

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <> <Navbar/> <Home/> <Test/> </>
    },

    {
      path:"/about",
      element:<> <Navbar/> <About/> </>
    },

    {
      path:"/contact",
      element:<> <Navbar/> <Contact/> </> 
    },

    {
      path:"/service",
      element:<> <Navbar/> <Service/> </>
    }


  ])

  return <RouterProvider router={router}>

  </RouterProvider>
}
 
export default App; 