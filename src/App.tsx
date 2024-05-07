import { Route, Routes } from 'react-router'
import { NavBar } from './Components/NavBar/NavBar'
import { Home } from './view/home/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <div>
      <NavBar></NavBar>
      {/* aca van las rutas a las que hacemos en Pages -Dylan  */}
      <BrowserRouter>
        <Routes>
          <Route index path='/home' element={<Home></Home>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
