import Sidebar from "../../components/Sidebar";
import ListPendaftaran from "../../components/List-Pendaftaran";
import Topbar from "../../components/Topbar";
import "./pendaftaran.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Pendaftaran() {
  const pendaftarans = useSelector((state) => state.pendaftaran.pendaftarans);

  const [pendaftaran, setPendaftaran] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPendaftaran();
  }, []);

  async function getPendaftaran() {
    try {
      const response = await axios.get('https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran');
      setPendaftaran(response.data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setError('Terjadi kesalahan saat mengambil data: ' + error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="content">
        <Sidebar />
        <main>
          <Topbar />
          <ListPendaftaran pendaftarans={pendaftarans} pendaftaran={pendaftaran} />
        </main>
      </div>
    </div>
  );
}

export default Pendaftaran;
