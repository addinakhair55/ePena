function Footer() {
    return(
        <>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-6 col-md-2">
                    <h5 className="fw-bold color">ARSHA</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            A108 Adam Street
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            New York, NY 545022
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            United States
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <strong>Phone :</strong> +123 456
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            <strong>Email :</strong> @example.com
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-1 offset-md-1 py-lg-0 py-4">
                    <h5 className="color">Useful Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Home
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Features
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Pricing
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            FAQs
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            About
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-lg-0 offset-lg-0 offset-md-1">
                    <h5 className="color">Our Services</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Web Design
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Web Development
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Product Management
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Marketing
                        </a>
                        </li>
                        <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-body-secondary">
                            Graphic Design
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 py-md-0 py-4">
                    <form>
                        <h5 className="color">Our Social Networks</h5>
                        <p>
                        Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                        valies
                        </p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <div className="icon-container">
                            <div className="icon">
                            <a
                                href="https://mail.google.com/"
                                className="bi bi-envelope-at icon-logo"
                            />
                            </div>
                            <div className="icon">
                            <a
                                href="https://www.linkedin.com/"
                                className="bi bi-linkedin icon-logo"
                            />
                            </div>
                            <div className="icon">
                            <a
                                href="https://twitter.com/"
                                className="bi bi-twitter icon-logo"
                            />
                            </div>
                            <div className="icon">
                            <a
                                href="https://www.instagram.com/"
                                className="bi bi-instagram icon-logo"
                            />
                            </div>
                            <div className="icon">
                            <a
                                href="https://id-id.facebook.com/"
                                className="bi bi-facebook icon-logo"
                            />
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </footer>

            <div className="bg-dark">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between py-3 my-4">
                <div className="col-md-4 d-flex">
                    <span className="mb-3 mb-md-0 text-light">© 2023 Company, Inc</span>
                </div>
                <div className="nav justify-content-between list-unstyled">
                    <p>Designed By </p>
                    <a className="text-info" href="#">
                    {" "}
                    BootstrapMade
                    </a>
                </div>
                </footer>
            </div>
            </div>
        </>
    )
}

export default Footer;