import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About'
import Game from './pages/Game'
import Profile from './pages/Profile';
import Social from './pages/Social';
import NavRoute from './components/NavRoute'
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className="App w-full h-full">

      <BrowserRouter>

        <Routes>
          <Route
                path='/about'
                element={<About/>}
                />
          
          <Route element={<NavRoute/>} >
            {/* routes with nav here */}

            <Route element={<ProtectedRoute authed={true} redirectPath='/about'/>}>
              
              <Route
                path='/game'
                element={<Game/>}
                />

              <Route 
                path='/user' 
                element={<Profile/>}
                />

              <Route
                path='/mindful'
                element={<Social/>}
                />
              
            </Route>

          </Route>

          <Route path='*' element={<Navigate to='/about' replace/>}/>

        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
