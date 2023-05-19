import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About'
import Game from './pages/Game'
import Profile from './pages/Profile';
import Social from './pages/Social';
import NavRoute from './components/NavRoute'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="App w-full h-full">


        <Routes>
          <Route
                path='/about'
                element={<About setUser={(user) => {setUser(user);navigate('/game')}}/>}
                />

          <Route element={<NavRoute/>} >
            {/* routes with nav here */}

            <Route element={<ProtectedRoute authed={!!user} redirectPath='/about'/>}>

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

          <Route path='' element={<Navigate to='/about' replace/>}/>

        </Routes>


    </div>
  )
}

export default App;