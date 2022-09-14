import { Outlet, Link } from "react-router-dom";
import Logo_M from '../assets/images/Logo_M.png';
import '../styles/Layout.scss';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <img src={Logo_M} alt="logo" />
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
