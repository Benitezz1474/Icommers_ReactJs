import { Routes,Route,Navigate } from 'react-router-dom'
import { FullGame } from './COMPONENTS/GAME/FullGame'
import { Games } from './COMPONENTS/GAME/index'
import { Home } from './COMPONENTS/Home.jsx'

import {NavBar} from "./COMPONENTS/NavBar.jsx" 

import "./STYLES/NavBar.css"

function App() {

return <>
  <NavBar />

  <Routes>
    <Route path = "/" element = {<Navigate to = "/home"/>} />

    <Route path='/home/*' element = {<Home />} />
    
    <Route path='/games/*' element = {<Games />} />

    <Route path='/fullGame/:id/*' element = {<FullGame />} />

  </Routes>

</>
}

export default App
