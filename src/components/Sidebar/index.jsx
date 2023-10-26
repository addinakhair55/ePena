import "./Sidebar.css"
import { Link } from "react-router-dom";
import epena from "../image/hero-epena.png"
import list from "../image/list.svg"

function Sidebar() {

    return(
      <>
          <ul className="navbar-nav sidebar text-fredoka">
            <h4 className="mx-3 text-warning">
                <Link className="nav-link mx-4" to="/pendaftaran">
                  <img src={epena} alt="" style={{width: 100}} />
                </Link>
            </h4>

          <hr className="mx-2 my-0 fw-bold" />
    
          <div className="nav-item pt-3 mx-3 text-form">FORMULIR</div>

          <li className="nav-item">
              <span className="d-flex mx-4">
                <img src={list} alt="" />
                <Link className="nav navbar mx-1 link-dash fw-bold" to="/pendaftaran">
                  PENDAFTARAN
                </Link>
              </span>
          </li>
        
            <hr className="mx-2 d-none d-md-block fw-bold" />
          </ul>
      </>
    )
}

export default Sidebar;