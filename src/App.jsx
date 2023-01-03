import { Routes,Route,Navigate } from 'react-router-dom'
import { FullGame } from './COMPONENTS/FullGame'
import { Games, Home, NavBar } from './COMPONENTS/index'

import "./STYLES/NavBar.css"

function App() {

return <>
  <NavBar />

  <Routes>
    <Route path = "/" element = {<Navigate to = "/home"/>} />
    <Route path='/home/*' element = {<Home />} />
    <Route path='/games' element = {<Games />} />
    <Route path='/fullGame/:id/*' element = {<FullGame />} />
  </Routes>

</>
}

export default App
