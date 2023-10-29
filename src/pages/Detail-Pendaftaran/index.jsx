import { Link, useLocation } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import "./Detail-Pendaftaran.css";

function PendaftaranDetail() {
  const { state } = useLocation();

  if (!state) {
    return <div>No product data available.</div>;
  }

  const {
    id,
    namaLengkap,
    jenisKelamin,
    namaOrangTua,
    alamatRumah,
    usia,
    kelas,
    programBimbelKelas,
    handphone,
  } = state;

  return (
    <>
      <div className="dashboard text-fredoka">
        <div className="content">
          <Sidebar />
          <main>
            <Topbar />
            <div className="container-fluid">
              <h2 className="text-center mb-4 mt-4 fw-bold">
                Detail Pendaftaran{" "}
                <span style={{ color: '#FF8A00' }}>{namaLengkap}</span>
              </h2>
              <div className="card shadow">
                <div className="card-header">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mt-2 justify-content-end">
                      <li className="breadcrumb-item">
                        <Link className="link-headd" to="/pendaftaran">
                          Pendaftaran
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Data {namaLengkap}
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="table-responsive m-3">
                  <table className="table table-striped small">
                    <thead>
                      <tr className="text-center align-middle">
                        <th scope="col">No</th>
                        <th scope="col">Nama Lengkap</th>
                        <th scope="col">Jenis Kelamin</th>
                        <th scope="col">Nama Orang Tua</th>
                        <th scope="col">Alamat Rumah</th>
                        <th scope="col">Usia</th>
                        <th scope="col">Kelas</th>
                        <th scope="col">Program Kelas Bimbel</th>
                        <th scope="col">No Handphone</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      <tr>
                        <td className="text-center">{id || 'N/A'}</td>
                        <td className="text-center">{namaLengkap || 'N/A'}</td>
                        <td className="text-center">{jenisKelamin || 'N/A'}</td>
                        <td className="text-center">{namaOrangTua || 'N/A'}</td>
                        <td className="text-center">{alamatRumah || 'N/A'}</td>
                        <td className="text-center">{usia || 'N/A'}</td>
                        <td className="text-center">{kelas || 'N/A'}</td>
                        <td className="text-center">{programBimbelKelas || 'N/A'}</td>
                        <td className="text-center">{handphone || 'N/A'}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="button-kembali">
                    <Link className="nav-link" to="/pendaftaran">
                      Kembali
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PendaftaranDetail;
