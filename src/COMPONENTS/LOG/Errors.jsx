export const Errors=({error})=>{

    return <div className="bg-danger text-light p-3 my-3" style={{borderRadius : "5px"}} >
        <h3>{error}</h3>
    </div>
}