import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About'
import Game from './pages/Game'
import Profile from './pages/Profile';
import Social from './pages/Social';
import NavRoute from './components/NavRoute'
import ProtectedRoute from './components/ProtectedRoute';
import '../src/index.css';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const fontLike = 'Jost';

  return (
    <div className="App w-full h-full">


        <Routes>
          <Route
                path='/about'
                element={<About setUser={(user) => {setUser(user);navigate('/game')}}/>}
                />

          <Route element={<NavRoute/>} >
            {/* routes with nav here */}

            <Route element={<ProtectedRoute authed={true} redirectPath='/about'/>}>

              <Route
                path='/game'
                element={<Game font={fontLike}/>}
                />

              <Route 
                path='/user' 
                element={<Profile font={fontLike}/>}
                />

              <Route
                path='/mindful'
                element={<Social font={fontLike}/>}
                />

            </Route>

          </Route>

          <Route path='' element={<Navigate to='/about' replace/>}/>

        </Routes>

    </div>
  )
}

export default App;