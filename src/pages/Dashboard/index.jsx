import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Logo from "../../components/image/hero-epena.png"

function Dashboard() {

  return (
    <div className="dashboard">
      <div className="content">
        <Sidebar />
        <main>
          <Topbar />
          <div className="text-center">
            <h1 className="text-fredoka mt-5 mb-3 fw-bold">Selamat Datang di</h1>
            <img src={Logo} alt="logo" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
