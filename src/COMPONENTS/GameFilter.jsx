import { Link } from "react-router-dom"
import "../STYLES/Filters.css"

export const GameFilter=()=>{

    return <div className="filters">
        <nav>
            <ul>
                <Link><li>Horror</li></Link>
                <Link><li>Shoter</li></Link>
                <Link><li>Adventure</li></Link>
                <Link><li>Sport</li></Link>
                <Link><li>Fight</li></Link>
            </ul>
        </nav>
    </div>
}