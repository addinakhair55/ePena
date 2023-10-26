import { Link } from "react-router-dom";
import "./Topbar.css"

function Topbar() {
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-light text-fredoka">
            <div className="container-fluid justify-content-end mx-3">
              <Link className="navbar fw-bold top-link" to="/login">KELUAR</Link>
            </div>
        </nav>
      </>
    )
}

export default Topbar;