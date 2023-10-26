import Fepena from "../image/footer.png"
import Email from "../image/img-email.png"
import Wa from "../image/img-wa.png"
import Maps from "../image/img-maps.png"
import Insta from "../image/instagram.svg"
import YouT from "../image/youtube.svg"
import Linkedin from "../image/linkedin.svg"
import "./Footer.css"

import { Link } from "react-router-dom"

function Footer() {
    return(
        <div className="bg-biru text-fredoka">
            <footer className="container py-5">
                <div className="row">
                    <div className="col-5">
                        <img src={Fepena} alt="" />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <p href="#" className="nav-link p-0 text-light">
                                    @2023 ePena by Addina Khairinisa
                                </p>
                            </li>
                            <div className="icon-container">
                                <div className="icon">
                                    <Link to="https://www.instagram.com/addina.ak">
                                        <img src={Insta} alt="instagram" className="mx-2"/>
                                    </Link>
                                </div>
                                <div className="icon">
                                    <Link to="https://www.youtube.com/channel/UCT8NjwWRrEqlWe0Iag8fdKg">
                                        <img src={YouT} alt="youtube" className="mx-2"/>
                                    </Link>
                                </div>
                                <div className="icon">
                                    <Link to="https://www.linkedin.com/in/addinakhair/">
                                        <img src={Linkedin} alt="linkedin" className="mx-2"/>
                                    </Link>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="col-md-4 offset-lg-0 offset-md-1">
                    <h5 className="text-light">Our Services</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link className="link-footer">
                                Pra-SD
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link className="link-footer">
                                SD
                            </Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link className="link-footer">
                                Privat
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-4">
                    <div>
                        <h5 className="text-light">Our Social Networks</h5>
                        <ul className="list-unstyled">
                            <li>
                                <li className="d-flex">
                                    <img src={Email} alt="email" style={{width: 16, height: 24}} />
                                    <Link className="link-footer px-2">epena.cemerlang@gmail.com</Link>
                                </li>
                                <li className="d-flex mt-2">
                                    <img src={Wa} alt="whatsapp" style={{width: 16, height: 24}} />
                                    <Link className="link-footer px-2">+62 812 3456 7890</Link>
                                </li>
                                <li className="d-flex mt-2">
                                    <img src={Maps} alt="maps" style={{width: 16, height: 24}} />
                                    <Link className="link-footer px-2">Jl. Thamrin Sudirman, DKI Jakarta, Indonesia</Link>
                                </li>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;