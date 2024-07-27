import './App.css'

import   "./assets/css/style.css"
import   "./assets/css/responsive.css"
import { Route, Router, Routes } from 'react-router-dom'
import { ROUTES } from './routes'
import Home from './pages/home'

function App() {
 

  return (

    <>
    <Routes>
    <Route path={ROUTES.HOME} element={<Home/>}     />
    <Route path="*" element={<Home/>}     />
    
    
    </Routes>
</>

  )
}

export default App
