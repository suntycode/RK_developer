import './App.css'

import   "./assets/css/style.css"
import   "./assets/css/responsive.css"
import { Route, Router, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Work from './pages/work'

function App() {
 

  return (

    <>
    <div className=' bg-bg_color flex justify-center items-center '>
    <div className=' max-w-[1024px]'>
    
    <Routes>
    <Route path={ROUTES.HOME} element={<Home/>}     />
    <Route path={ROUTES.CONTACT} element={<Contact/>}     />
    <Route path={ROUTES.ABOUT} element={<About/>}     />
    <Route path={ROUTES.PROJECTS} element={<Work/>}     />
    <Route path="*" element={<Home/>}     />
    
    
    </Routes>
    </div>
    </div>
</>

  )
}

export default App
