import styled from "styled-components"
import { firebaseLogout } from "../Firebase/firebaseLogout"

export const LogoutConfirm=({logoutConfirm, setLogoutConfirm})=>{

const {handleLogout} = firebaseLogout()
     return <>
    
    <BoxContent>

    <Box>
          
          <h2 className="text-center " >Are you secure that logout? </h2>

          <div className="d-flex align-items-center justify-content-center my-3">


            <button className="btn btn-success mx-2" onClick={()=>setLogoutConfirm(false)} >Cancel</button>
            <button className="btn btn-danger mx-2" onClick={handleLogout} >Logout</button>
          </div>

    </Box>


    </BoxContent>    
    </>
}


const Box = styled.div`

width: 80%;
max-width: 700px;
padding: 20px;
margin:  200px auto;
border: 1px solid #c7c7c7ad;
border-radius: 10px;
box-shadow: -5px 5px 10px 0 rgba(51,51,51,0.2);
position: relative;
background-color: #fff;
z-index: 100;
`

const BoxContent = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-color: #101010ad;
    position: absolute;
    z-index: 200;
`