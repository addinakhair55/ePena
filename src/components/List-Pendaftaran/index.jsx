import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListPendaftaran({ pendaftarans, updatePendaftaran }) {
  const [editFormData, setEditFormData] = useState({});
  const [editIndex, setEditIndex] = useState(-1);

  // PUT | UPDATE
  async function handleUpdate(index) {
    try {
      const pendaftaranToUpdate = editFormData[index];
  
      if (!pendaftaranToUpdate) {
        console.error('Edit form data not found for the given index:', index);
        return;
      }

      if (!pendaftarans[index] || !pendaftarans[index].id) {
        console.error('Invalid data for the given index:', index);
        return;
      }
  
      const pendaftaranId = pendaftarans[index].id;
      const response = await axios.put(`https://651e38bb44a3a8aa4767e444.mockapi.io/products/${pendaftaranId}`, pendaftaranToUpdate);
  
      if (response.status === 200) {
        console.log('Pendaftaran updated successfully!');
        setEditIndex(-1);
      } else {
        console.error('API request was successful, but the response status is not 200:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while updating data:', error);
    }
  }

  async function handleDelete(index) {
    const pendaftaranId = pendaftarans[index].id;

    try {
      const response = await axios.delete(`https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran/${pendaftaranId}`);

      if (response.status === 200) {
        console.log('Pendaftaran berhasil dihapus!');
        const updatedPendaftarans = pendaftarans.filter((_, i) => i !== index);
        updatePendaftaran(updatedPendaftarans);
      } else {
        console.error('Permintaan API berhasil, tetapi status respons bukan 200:', response.status);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus data:', error);
    }
  }

  return (
    <div className="container-fluid">
      <h3 className="text-secondary mt-2">Pendaftaran</h3>
      <p>DataTables is a third-party plugin used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.</p>
      <div className="card shadow mb-4">
        <div className="card-header">
          <button className="btn btn-primary">
            <Link className="m-0 nav-link fw-bold" to="/add-pendaftaran">+ Tambahkan</Link>
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table table-striped small">
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>Nama Lengkap</th>
                  <th>Jenis Kelamin</th>
                  <th>Nama Orang Tua</th>
                  <th>Alamat</th>
                  <th>Usia</th>
                  <th>Kelas</th>
                  <th>Program Bimbel</th>
                  <th>No Handphone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendaftarans && pendaftarans.length > 0 ? (
                  pendaftarans.map((pendaftaran, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].namaLengkap : pendaftaran.namaLengkap}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], namaLengkap: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.namaLengkap
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].jenisKelamin : pendaftaran.jenisKelamin}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], jenisKelamin: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.jenisKelamin
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].namaOrangTua : pendaftaran.namaOrangTua}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], namaOrangTua: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.namaOrangTua
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].alamatRumah : pendaftaran.alamatRumah}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], alamatRumah: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.alamatRumah
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].usia : pendaftaran.usia}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], usia: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.usia
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].kelas : pendaftaran.kelas}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], kelas: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.kelas
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].programBimbelKelas : pendaftaran.programBimbelKelas}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], programBimbelKelas: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.kelas
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editFormData[index] ? editFormData[index].handphone : pendaftaran.handphone}
                            onChange={(e) => {
                              const value = e.target.value;
                              setEditFormData((prevData) => ({
                                ...prevData,
                                [index]: { ...prevData[index], handphone: value },
                              }));
                            }}
                          />
                        ) : (
                          pendaftaran.handphone
                        )}
                      </td>
                      <td>
                        {editIndex === index ? (
                          <>
                            <button className="btn btn-success" onClick={() => handleUpdate(index)}>Save</button>
                            <button className="btn btn-warning" onClick={() => setEditIndex(-1)}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-warning" onClick={() => setEditIndex(index)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                          </>
                        )}
                        <button className="btn btn-primary">DETAIL</button>
                      </td>
                    </tr>
                  ))
                ) : 
                  <tr>
                    <td colSpan="8">No pendaftarans available.</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPendaftaran;
