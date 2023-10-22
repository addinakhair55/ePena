import { useState } from "react";
import "./CreatePendaftaran.css";
import { useDispatch } from "react-redux";
import axios from "axios";

function CreatePendaftaran({ addPendaftaran }) {

  const [formData, setFormData] = useState({
    namaLengkap: '',
    jenisKelamin: '',
    namaOrangTua: '',
    alamatRumah: '',
    usia: '',
    kelas: '',
    programBimbelKelas: '',
    handphone: '',
    namaLengkapError: '',
    jenisKelaminError: '',
    namaOrangTuaError: '',
    alamatRumahError: '',
    usiaError: '',
    kelasError: '',
    programBimbelKelasError: '',
    handphoneError: '',
    isFormSubmitted: false,
  });

  const handleNamaLengkapChange = (e) => {
    setFormData({
      ...formData,
      namaLengkap: e.target.value,
    });
  };

  const handleJenisKelaminChange = (e) => {
    setFormData({
      ...formData,
      jenisKelamin: e.target.value,
    });
  };

  const handleNamaOrangTuaChange = (e) => {
    setFormData({
      ...formData,
      namaOrangTua: e.target.value,
    });
  };

  const handleAlamatRumahChange = (e) => {
    setFormData({
      ...formData,
      alamatRumah: e.target.value,
    });
  };

  const handleUsiaChange = (e) => {
    setFormData({
      ...formData,
      usia: e.target.value,
    });
  };

  const handleKelasChange = (e) => {
    setFormData({
      ...formData,
      kelas: e.target.value,
    });
  };

  const handleProgramBimbelKelasChange = (e) => {
    setFormData({
      ...formData,
      programBimbelKelas: e.target.value,
    });
  };

  const handleHandphoneChange = (e) => {
    setFormData({
      ...formData,
      handphone: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setFormData({
      ...formData,
      isFormSubmitted: true,
    });
  
    const newPendaftaran = {
      namaLengkap: formData.namaLengkap,
      jenisKelamin: formData.jenisKelamin,
      namaOrangTua: formData.namaOrangTua,
      alamatRumah: formData.alamatRumah,
      usia: formData.usia,
      kelas: formData.kelas,
      programBimbelKelas: formData.programBimbelKelas,
      handphone: formData.handphone,
    };
  
    try {
      const response = await axios.post("https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran", newPendaftaran);
  
      if (response.status === 201) {
        dispatch(addPendaftaran(newPendaftaran));
        setFormData({
          namaLengkap: "",
          jenisKelamin: "",
          namaOrangTua: "",
          alamatRumah: "",
          usia: "",
          kelas: "",
          programBimbelKelas: "",
          handphone: "",
        });
        alert("Data tersimpan dengan sukses!");
      } else {
        console.error("Permintaan API berhasil, tetapi status respons bukan 201:", response.status);
        alert("Gagal menyimpan data. Silakan periksa respons dari server.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error);
      alert("Gagal menyimpan data. Lihat konsol untuk detail kesalahan.");
    }
  };
  

  return (
    <>
      <main className="container-fluid">
        <section className="card shadow mt-1 mb-4">
          <div className="card-header">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-3 justify-content-end">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Formulir Pendaftaran
                </li>
              </ol>
            </nav>
          </div>
          <div className="row g-5 mt-3 justify-content-center">
            <div className="col-md-7 col-lg-8">
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-8 col-sm-12">
                    <label htmlFor="namaLengkap" className="form-label">
                      Nama Lengkap :
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      className="form-control"
                      value={formData.namaLengkap}
                      onChange={handleNamaLengkapChange}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="jenisKelamin" className="form-label">
                      Jenis Kelamin :
                    </label>
                    <div className="form-check">
                      <input
                        id="Laki-Laki"
                        name="jenisKelamin"
                        type="radio"
                        className="form-check-input"
                        value="Laki-Laki"
                        checked={formData.jenisKelamin === 'Laki-Laki'}
                        onChange={handleJenisKelaminChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="Laki-Laki">
                        Laki-Laki
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="Perempuan"
                        name="jenisKelamin"
                        type="radio"
                        className="form-check-input"
                        value="Perempuan"
                        checked={formData.jenisKelamin === 'Perempuan'}
                        onChange={handleJenisKelaminChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="Perempuan">
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <label htmlFor="namaOrangTua" className="form-label">
                      Nama Orang Tua :
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Orang Tua"
                      className="form-control"
                      value={formData.namaOrangTua}
                      onChange={handleNamaOrangTuaChange}
                    />
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <label htmlFor="alamatRumah" className="form-label">
                      Alamat Rumah :
                    </label>
                    <textarea
                      placeholder="Alamat Rumah"
                      className="form-control"
                      value={formData.alamatRumah}
                      onChange={handleAlamatRumahChange}
                    />
                  </div>
                  <div className="col-md-7">
                    <label htmlFor="usia" className="form-label">
                      Usia
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="number"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Usia"
                        className="form-control"
                        value={formData.usia}
                        onChange={handleUsiaChange}
                        required
                      />
                      <div className="valid-feedback">Selesai</div>
                      <div className="invalid-feedback">
                        Harap masukkan Usia yang valid.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <label htmlFor="kelas" className="form-label">
                      Kelas
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="number"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Kelas"
                        className="form-control"
                        value={formData.kelas}
                        onChange={handleKelasChange}
                        required
                      />
                      <div className="valid-feedback">Selesai</div>
                      <div className="invalid-feedback">
                        Harap masukkan Kelas yang valid.
                      </div>
                  </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label htmlFor="programBimbelKelas" className="form-label">
                      Program Bimbel Kelas
                    </label>
                    <select
                      className="form-control"
                      value={formData.programBimbelKelas}
                      onChange={handleProgramBimbelKelasChange}
                    >
                      <option value="" disabled>
                        Pilih...
                      </option>
                      <option value="Pra-SD">Pra-SD</option>
                      <option value="SD">SD</option>
                      <option value="Privat">Privat</option>
                    </select>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <label htmlFor="handphone" className="form-label">
                      No. Handphone :
                    </label>
                    <input
                      type="number"
                      placeholder="Handphone"
                      className="form-control"
                      value={formData.handphone}
                      onChange={handleHandphoneChange}
                    />
                  </div>
                  <hr className="my-4" />
                  <button
                    className="w-100 btn btn-primary btn-md mb-4"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#invalid"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CreatePendaftaran;