import React, { useEffect, useState } from 'react';
import ImageDetail from '../image/detail.svg';
import ImageEdit from '../image/pencil-square.svg';
import ImageDelete from '../image/trash.svg';
import ImageSave from '../image/floppy.svg';
import ImageX from '../image/x.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { editPendaftaran, deletePendaftaran } from '../../pendaftaranSlice';
import { useDispatch } from 'react-redux';

import './ListPendaftaran.css';

function ListPendaftaran({ pendaftarans, updatePendaftaran }) {
  const dispatch = useDispatch();
  const [editFormData, setEditFormData] = useState({});
  const [editIndex, setEditIndex] = useState(-1);

  const loadData = async () => {
    try {
      const response = await axios.get('https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran');
      if (response.status === 200) {
        updatePendaftaran(response.data);
      } else {
        console.error('Permintaan API berhasil, tetapi status respons bukan 200:', response.status);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat memuat data:', error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PUT || UPDATE
  const handleUpdate = async (index) => {
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
      const response = await axios.put(`https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran/${pendaftaranId}`, pendaftaranToUpdate);

      if (response.status === 200) {
        alert('Pendaftaran updated successfully!');
        dispatch(editPendaftaran({ index, updatedPendaftaran: pendaftaranToUpdate }));
        setEditIndex(-1);

        loadData();
      } else {
        console.error('API request was successful, but the response status is not 200:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while updating data:', error);
    }
  };

  // DELETE || HAPUS
  const handleDelete = async (index) => {
    const pendaftaranId = pendaftarans[index].id;
  
    // Menampilkan konfirmasi dialog sebelum menghapus
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data pendaftaran ini?");
    
    if (confirmDelete) {
      try {
        const response = await axios.delete(`https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran/${pendaftaranId}`);
    
        if (response.status === 200) {
          alert('Data pendaftaran tersebut berhasil dihapus!');
          dispatch(deletePendaftaran(index));

          loadData();
        } else {
          console.error('Permintaan API berhasil, tetapi status respons bukan 200:', response.status);
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat menghapus data:', error);
      }
    }
  };

  return (
    <div className="container-fluid text-fredoka">
      <h2 className="warna-1 mt-3 text-center">Pendaftaran</h2>
      <p className="text-center">Dibawah ini adalah informasi siswa/i yang terdaftar di Pena Cemerlang.</p>
      <div className="card shadow mb-4">
        <div className="card-header">
          <button className="button-tambah">
            <Link className="m-0 nav-link fw-bold" to="/add-pendaftaran">
              + Tambahkan
            </Link>
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
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
                  <th>Program Kelas Bimbel</th>
                  <th>No Handphone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendaftarans && pendaftarans.length > 0 ? (
                  pendaftarans.map((pendaftaran, index) => (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">
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
                      <td className="text-center">
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
                      <td className="text-center">
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
                      <td className="text-center">
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
                      <td className="text-center">
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
                      <td className="text-center">
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
                      <td className="text-center">
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
                          pendaftaran.programBimbelKelas
                        )}
                      </td>
                      <td className="text-center">
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
                      <td className="d-flex text-center">
                        <button className="btn btn-info btn-sm m-1" title="Detail">
                          <Link className="nav-link" to={`/pendaftaran/${pendaftaran.namaLengkap}`} state={pendaftaran}>
                            <img src={ImageDetail} alt="detail" />
                          </Link>
                        </button>
                        {editIndex === index ? (
                          <>
                            <button className="btn btn-success btn-sm m-1" title="Simpan" onClick={() => handleUpdate(index)}>
                              <img src={ImageSave} alt="save" />
                            </button>
                            <button className="btn btn-secondary btn-sm m-1" title="Kembali" onClick={() => setEditIndex(-1)}>
                              <img src={ImageX} alt="cancel" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-warning btn-sm m-1" title="Edit" onClick={() => setEditIndex(index)}>
                              <img src={ImageEdit} alt="edit" />
                            </button>
                            <button className="btn btn-danger btn-sm m-1" title="Hapus" onClick={() => handleDelete(index)}>
                              <img src={ImageDelete} alt="delete" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No pendaftarans available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPendaftaran;
