import { Route, Routes } from "react-router-dom"
import { Home, NavBar } from "../COMPONENTS"
import { FullGame, Games } from "../COMPONENTS/GAME"
import { UserConfig } from "../COMPONENTS/USER/UserConfig"
import { Logout, PrivateRoute } from "../CONTEXT"
// import { firebaseLogoutConfirm } from "../Firebase/firebaseLogoutConfirm"

export const PrincipalRouter=()=>{

    // const {logoutConfirm,setLogoutConfirm} = firebaseLogoutConfirm()

    return <>
    
<NavBar />

<div className='mt-5 py-2'>

    
        

 <Routes>
   
   
  <Route path = "/logout" element = {<Logout />} />

  <Route path='/*' element = {<PrivateRoute>

  <Routes>
  <Route path='/home/*' element = {<Home />} />

  <Route path = "/userConfig" element = {<UserConfig />} />
   
   <Route path='/games/*' element = {<Games />} />

   <Route path='/fullGame/:id/*' element = {<FullGame />} />
  </Routes>

  </PrivateRoute>} />

 </Routes>

   </div>

    </>
}