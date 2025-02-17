import './App.css'
import "./Responsive.css"
import 'aos/dist/aos.css'; 
import RootLayout from './layout/RootLayout';
import { lazy, useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; 
import Aos from 'aos';
const Home = lazy(()=> import("./pages/Home"))
const ContactUs = lazy(()=> import("./pages/ContactUs"))
const Projects = lazy(()=> import("./pages/Projects"))
const Solutions = lazy(()=> import("./pages/Solutions"))
const News = lazy(()=> import("./pages/News"))
const AboutUs = lazy(()=> import("./pages/AboutUs"))
const Partners = lazy(()=> import("./pages/Partners"))
const AboutProduct = lazy(()=> import("./pages/AboutProduct"))
import { productLoader } from "./pages/AboutProduct"
import wrench from "./assets/wrench.png"
// import ErrorBoundary from './components/ErrorBoundary';

function HydrateFallback() {
  return <p>Loading...</p>;
}

function App() {

  
  useEffect(() => {
    Aos.init({
      disable: () => window.innerWidth < 1024,
    });
    document.body.style.cursor = `url(${wrench}), auto`
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<AboutProduct />} loader={productLoader} HydrateFallback={HydrateFallback}/>
          <Route path='/solutions' element={<Solutions />}/>
          <Route path='/solutions/:id' element={<AboutProduct />} loader={productLoader} HydrateFallback={HydrateFallback}/>
          <Route path='/news' element={<News />}/>
          <Route path='/partners' element={<Partners />}/>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
