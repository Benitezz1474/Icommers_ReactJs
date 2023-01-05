import { Routes,Route,Navigate } from 'react-router-dom'
import { FullGame } from './COMPONENTS/GAME/FullGame'
import { Games } from './COMPONENTS/GAME/index'
import { Home } from './COMPONENTS/Home.jsx'

import {NavBar} from "./COMPONENTS/NavBar.jsx" 
import { dataContext,GameContext } from "./HOOKS/gameContext";

import "./STYLES/NavBar.css"

function App() {

return <GameContext>


  <NavBar />

  <Routes>
    <Route path = "/" element = {<Navigate to = "/games"/> } />

    <Route path='/home/*' element = {<Home />} />
    
    <Route path='/games/*' element = {<Games />} />

    <Route path='/fullGame/:id/*' element = {<FullGame />} />

  </Routes>

</GameContext>

}

export default App
