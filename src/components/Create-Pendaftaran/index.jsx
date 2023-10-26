import { useState } from "react";
import "./CreatePendaftaran.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CreatePendaftaran({ addPendaftaran }) {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    jenisKelamin: "",
    namaOrangTua: "",
    alamatRumah: "",
    usia: "",
    kelas: "",
    programBimbelKelas: "",
    handphone: "",
  });

  const [formErrors, setFormErrors] = useState({
    namaLengkapError: "",
    jenisKelaminError: "",
    namaOrangTuaError: "",
    alamatRumahError: "",
    usiaError: "",
    kelasError: "",
    programBimbelKelasError: "",
    handphoneError: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    const newFormErrors = { ...formErrors };

    if (formData.namaLengkap.trim() === "") {
      newFormErrors.namaLengkapError = "Nama Lengkap harus diisi";
      hasError = true;
    } else {
      newFormErrors.namaLengkapError = "";
    }

    if (formData.jenisKelamin === "") {
      newFormErrors.jenisKelaminError = "Jenis Kelamin harus dipilih";
      hasError = true;
    } else {
      newFormErrors.jenisKelaminError = "";
    }

    if (formData.namaOrangTua.trim() === "") {
      newFormErrors.namaOrangTuaError = "Nama Orang Tua harus diisi";
      hasError = true;
    } else {
      newFormErrors.namaOrangTuaError = "";
    }

    if (formData.alamatRumah.trim() === "") {
      newFormErrors.alamatRumahError = "Alamat Rumah harus diisi";
      hasError = true;
    } else {
      newFormErrors.alamatRumahError = "";
    }

    if (formData.usia === "") {
      newFormErrors.usiaError = "Usia harus diisi";
      hasError = true;
    } else {
      newFormErrors.usiaError = "";
    }

    if (formData.kelas === "") {
      newFormErrors.kelasError = "Kelas harus diisi";
      hasError = true;
    } else {
      newFormErrors.kelasError = "";
    }

    if (formData.programBimbelKelas === "") {
      newFormErrors.programBimbelKelasError = "Program Bimbel Kelas harus dipilih";
      hasError = true;
    } else {
      newFormErrors.programBimbelKelasError = "";
    }

    if (formData.handphone.trim() === "") {
      newFormErrors.handphoneError = "Nomor Handphone harus diisi";
      hasError = true;
    } else {
      newFormErrors.handphoneError = "";
    }

    if (hasError) {
      setFormErrors(newFormErrors);
      return;
    }

    setFormSubmitted(true); 

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
      const response = await axios.post(
        "https://651e38bb44a3a8aa4767e444.mockapi.io/pendaftaran",
        newPendaftaran
      );

      if (response.status === 201) {
        addPendaftaran(newPendaftaran);
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
        console.error(
          "Permintaan API berhasil, tetapi status respons bukan 201:",
          response.status
        );
        alert("Gagal menyimpan data. Silakan periksa respons dari server.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error);
      alert("Gagal menyimpan data. Lihat konsol untuk detail kesalahan.");
    }
  };

  return (
    <>
      <main className="container-fluid text-fredoka">
        <section className="card shadow mt-1 mb-4">
          <div className="card-header">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-3 justify-content-end">
                <li className="breadcrumb-item">
                  <Link to="/pendaftaran" className="link-headd">Pendaftaran</Link>
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
                      className={`form-control ${
                        formErrors.namaLengkapError ? "is-invalid" : formSubmitted ? "is-valid" : ""
                      }`}
                      value={formData.namaLengkap}
                      onChange={handleNamaLengkapChange}
                    />
                    <div className="text-danger">{formErrors.namaLengkapError}</div>
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
                        checked={formData.jenisKelamin === "Laki-Laki"}
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
                        checked={formData.jenisKelamin === "Perempuan"}
                        onChange={handleJenisKelaminChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="Perempuan">
                        Perempuan
                      </label>
                    </div>
                    <div className="text-danger">{formErrors.jenisKelaminError}</div>
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
                    <div className="text-danger">{formErrors.namaOrangTuaError}</div>
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
                    <div className="text-danger">{formErrors.alamatRumahError}</div>
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
                      <div className="text-danger">{formErrors.usiaError}</div>
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
                      <div className="text-danger">{formErrors.kelasError}</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label htmlFor="programBimbelKelas" className="form-label">
                      Program Kelas Bimbel
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
                    <div className="text-danger">{formErrors.programBimbelKelasError}</div>
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
                    <div className="text-danger">{formErrors.handphoneError}</div>
                  </div>
                  <hr className="mt-5" />
                  <button
                    className="button-submit mb-5"
                    type="submit"
                  >
                    KIRIM
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
