import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "./Dash.css"

function Dashboard() {

    return(
        <div className="dashboard">
        <div className="content">
        <Sidebar />
            <main>
                <Topbar />
                <h1 className="text-center pt-3">Selamat Datang di ePena</h1>
            </main>
        </div>
      </div>
    )
}

export default Dashboard