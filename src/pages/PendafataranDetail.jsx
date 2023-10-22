import { useLocation } from "react-router-dom"

function PendaftaranDetail() {
    const {state} = useLocation()
    console.log(state);

    if (!state) {
        return <div>No product data available.</div>;
    }
    
    return(
        <>
             <div>
              <div className="table-responsive small m-5">                      
              <h2 className="text-center mb-4 mt-4 fw-bold">Detail Pendaftaran</h2>
                <table className="table">
                  <thead>
                    <tr className="text-center align-middle">
                      <th scope="col">No</th>
                      <th scope="col">Nama Lengkap</th>
                      <th scope="col">Jenis Kelamin</th>
                      <th scope="col">Nama Orang Tua</th>
                      <th scope="col">Alamat Rumah</th>
                      <th scope="col">Usia</th>
                      <th scope="col">Kelas</th>
                      <th scope="col">Program Kelas</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider text-center align-middle">
                    <tr>
                        <td>{state.id || 'N/A'}</td>
                        <td>{state.namaLengkap || 'N/A'}</td>
                        <td>{state.jenisKelamin || 'N/A'}</td>
                        <td>{state.namaOrangTua || 'N/A'}</td>
                        <td>{state.alamatRumah || 'N/A'}</td>
                        <td>{state.usia|| 'N/A'}</td>
                        <td>{state.kelas|| 'N/A'}</td>
                        <td>{state.programKelas|| 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </>
    )
}

export default PendaftaranDetail