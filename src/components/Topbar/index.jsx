import { Link } from "react-router-dom";

function Topbar() {
    return(
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid justify-content-end mx-3">
            <div className="btn-group dropstart">
                <Link className="navbar nav-link text-warning fw-bold" to="/">Logout</Link>
            </div>
            </div>
        </nav>
      </>
    )
}

export default Topbar;