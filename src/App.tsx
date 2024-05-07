import { Route, Routes } from 'react-router'
import { NavBar } from './Components/NavBar/NavBar'
import { Home } from './view/home/Home'
import { BrowserRouter } from 'react-router-dom'
import { HomeLayout } from './layout/HomeLayout'
import { Profile } from './Components/profile/Profile'


function App() {

// TODO CREAR UN ESTADO GLOBAL PARA EL IDIOMA
 

  return (
    <div>
      <NavBar></NavBar>
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}/>
          <Route index element={<Home></Home>}></Route>
          <Route index path='/profile' element={<Profile/>}></Route>
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
