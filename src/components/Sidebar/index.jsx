import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {

    return(
      <>
        <ul
          className="navbar-nav bg-secondary sidebar"
        >
          <h4 className="mx-3 text-warning">
              <Link
                className="nav-link mx-4"
                to="/dashboard"
              >
                ePena
              </Link>
          </h4>
  

        <hr className="mx-2 my-0" />
  
        <div className="mav-item pt-3 mx-3 fw-bold">Formulir</div>

        <li className="nav-item">
            <span>
              <Link
                className="nav-link mx-4"
                to="/pendaftaran"
              >
                Pendaftaran
              </Link>
            </span>
          
        </li>
      
          <hr className="mx-2 d-none d-md-block" />
          
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0">
              ---
            </button>
          </div>
        </ul>
      </>
    )
}

export default Sidebar;