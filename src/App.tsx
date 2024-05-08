import { NavBar } from './Components/NavBar/NavBar'
import { Home } from './view/home/Home'
import {  Route, Routes } from 'react-router-dom'
// import { Login } from './Components/login/Login'
import { HomeLayout } from './layout/HomeLayout'
import Footer from './Components/Footer/Footer'

function App() {

// TODO CREAR UN ESTADO GLOBAL PARA EL IDIOMA
 

  return (
    <div className='bg-gray-200 h-screen'>
      <NavBar />
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
     
        <Routes>
          <Route path='/' element={<HomeLayout />}/>
          <Route index element={<Home />}></Route>
          {/* <Route index path='login' element={<Login></Login>}></Route> */}
        </Routes>
      
   
      <Footer />
    </div>
  )
}

export default App
