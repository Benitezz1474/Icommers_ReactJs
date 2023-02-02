export const SpinnerGames=({text})=>{

    return <div className="container d-flex align-items-center justify-content-center mt-5 pt-5" >
        <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden">{text}</span>
  </div>
    </div>
}