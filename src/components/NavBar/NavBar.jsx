import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.scss"


const NavBar = () => {
    return (
        <nav className="Navbar">
        <Link to="/" className="Brand">
            <h2>SportEcommerce</h2>
        </Link>

        <ul className="categorias">
            <li className="categoria">
                <NavLink to="/categoria/Camisetas" className={ ({isActive}) => ( isActive ? "active-link" : "") }>Camisetas</NavLink>
            </li>
            <li className="categoria">
                <Link to="/categoria/espinilleras">Espinilleras</Link>
            </li>
            <li className="categoria">
                <Link to="/categoria/Botines">Botines</Link>
            </li>
        </ul>

        <CartWidget/>
        </nav>
    )
}
export default NavBar
