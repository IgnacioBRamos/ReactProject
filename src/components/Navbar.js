import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
        <div className="flex justify-between navbar bg-accent text-black">
            
            <Link to='/' className="btn btn-ghost normal-case text-xl">Kunst</Link>
        
            <ul className="menu menu-vertical lg:menu-horizontal rounded-box ">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to={`/category/buzo`}>Buzos</Link></li>
                <li><Link to={`/category/hoddie`}>Hoodies</Link></li>
                <li><Link to={`/category/campera`}>Camperas</Link></li>
            </ul>
            <CartWidget/>          
        </div>
    )
}

export default Navbar