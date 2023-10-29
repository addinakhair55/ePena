import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../image/epena.png"

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body bg-warna fixed-top text-fredoka">
                <div className="container-fluid">
                    <img src={Logo} alt="" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                    <ul className="nav navbar-nav" role="tablist">
                        <li className="nav-item pe-2" role="presentation">
                            <Link
                                className="navbar link link1 mx-2"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item pe-2">
                        <Link
                            className="navbar link link1 mx-2"
                            to="/openai"
                        >
                            Chat Bot AI
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                            <Link
                                className="navbar linkk link2 mx-2"
                                to="/dashboard"
                            >
                                LOGIN
                            </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                            <button className="buttonnn button3 mx-2">
                                <Link
                                    className="nav-link text-light"
                                    to="/dashboard"
                                >
                                    SIGN UP
                                </Link>
                            </button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;