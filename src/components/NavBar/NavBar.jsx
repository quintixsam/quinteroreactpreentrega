import CartWidget from "./CartWidget"
import "./Navbar.scss"

const NavBar = () => {
    return (
        <nav className="Navbar">
        <div className="brand">
            <h2>Ecommerce</h2>
        </div>

        <ul>
            <li>Botines</li>
            <li>Camisetas</li>
            <li>Espinilleras</li>
        </ul>

        <CartWidget/>
        </nav>
    )
}
export default NavBar