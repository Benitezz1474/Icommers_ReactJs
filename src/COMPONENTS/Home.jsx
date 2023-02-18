import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { Games } from "./GAME/Games"

export const Home=()=>{

      return <HomeContent>


        <BannerText>

            <h2 className="text-light" >We Collection</h2>
            
            <p className="text-light">Visita TODA nuestra colección de juegos. 
               Las reseñas en esta app están escritas por mis 
            colegas y yo, también puedes dejar la tuya . 
            </p> 

           <Link to = "/games" > <button className="btn btn-primary" >To Show Collection!!</button></Link>

        </BannerText>

    </HomeContent>
}


const HomeContent = styled.div`
    
    width : 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 20px;
    background-image: url("/assets/IMGs/ps4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    align-items: center;
`

const BannerText = styled.div`
    
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    background-color: #595858;

`