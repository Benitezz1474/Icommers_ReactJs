import { Routes,Route,Navigate } from 'react-router-dom'
import { Login, Register } from './COMPONENTS/LOG'
import { Logout, PrivateRoute, PublicRoute } from './CONTEXT/index.js'
import { PrincipalRouter } from './Routers/PrincipalRouter'

import "./STYLES/NavBar.css"

function App() {

return <>


  <Routes>
    
    <Route path = "/" element = {<Navigate to = "/login"/> } />

    <Route path = "/login" element = {
      <PublicRoute>
        <Login /> 
      </PublicRoute>
    }/>

   <Route path = "/register" element = {
      <PublicRoute>
        {/* aqui va el componente  <Rgister />  */}
        <Register />
      </PublicRoute>
    }/>

    
    <Route path = "/logout" element = {<Logout />} />


    <Route path = "/*" element = {<PrivateRoute >

   <PrincipalRouter />

    </PrivateRoute>} />

  </Routes>


    {/* Footer */}
</>

}

export default App
