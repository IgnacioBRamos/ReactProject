import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
        <div className="flex justify-between navbar bg-accent text-black">
            
            <a className="btn btn-ghost normal-case text-xl">Kunst</a>
        
            <ul className="menu menu-vertical lg:menu-horizontal rounded-box ">
                <li><a>Inicio</a></li>
                <li><a>Buzos</a></li>
                <li><a>Hoodies</a></li>
                <li><a>Camperas</a></li>
            </ul>
            <CartWidget/>          
        </div>
    )
}

export default Navbar