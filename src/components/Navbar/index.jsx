import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                    <i className="bi bi-dice-3 text-primary" />
                    Simple Header
                    </a>
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
                    <ul className="nav nav-pills navbar-nav" id="pills-tab" role="tablist">
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link active"
                            to="/"
                        >
                            Home
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link"
                            to="/openai"
                        >
                            Chat AI
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link"
                            to="/add-product"
                        >
                            Create Product
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link"
                            to="/dashboard"
                        >
                            Dashboard
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            Pricing
                        </Link>
                        </li>
                        <li className="nav-item pe-2" role="presentation">
                        <Link
                            className="nav-link"
                            id="pills-faqs-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-faqs"
                            type="button"
                            role="tab"
                            aria-controls="pills-faqs"
                            aria-selected="false"
                        >
                            FAQs
                        </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                        <Link
                            className="nav-link"
                            id="pills-about-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-about"
                            type="button"
                            role="tab"
                            aria-controls="pills-about"
                            aria-selected="false"
                        >
                            About
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;