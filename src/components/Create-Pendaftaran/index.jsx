import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addPendaftaran } from '../../pendaftaranSlice';
import axios from "axios";
import "./CreatePendaftaran.css";

function CreatePendaftaran() {
  const navigate = useNavigate();

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
    namaLengkap: "",
    jenisKelamin: "",
    namaOrangTua: "",
    alamatRumah: "",
    usia: "",
    kelas: "",
    programBimbelKelas: "",
    handphone: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormErrors = {
      namaLengkap: "",
      jenisKelamin: "",
      namaOrangTua: "",
      alamatRumah: "",
      usia: "",
      kelas: "",
      programBimbelKelas: "",
      handphone: "",
    };

    let hasError = false;

    // Validasi input
    if (formData.namaLengkap.trim() === "") {
      newFormErrors.namaLengkap = "Nama Lengkap harus diisi";
      hasError = true;
    }

    if (formData.jenisKelamin === "") {
      newFormErrors.jenisKelamin = "Jenis Kelamin harus dipilih";
      hasError = true;
    }

    if (formData.namaOrangTua.trim() === "") {
      newFormErrors.namaOrangTua = "Nama Orang Tua harus diisi";
      hasError = true;
    }

    if (formData.alamatRumah.trim() === "") {
      newFormErrors.alamatRumah = "Alamat Rumah harus diisi";
      hasError = true;
    }

    if (formData.usia === "") {
      newFormErrors.usia = "Usia harus diisi";
      hasError = true;
    }

    if (formData.kelas === "") {
      newFormErrors.kelas = "Kelas harus diisi";
      hasError = true;
    }

    if (formData.programBimbelKelas === "") {
      newFormErrors.programBimbelKelas = "Program Bimbel Kelas harus dipilih";
      hasError = true;
    }

    if (formData.handphone.trim() === "") {
      newFormErrors.handphone = "Nomor Handphone harus diisi";
      hasError = true;
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
        navigate('/pendaftaran');
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
    <main className="container-fluid text-fredoka">
      <section className="card shadow mt-1 mb-4">
        <div className="card-header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-3 justify-content-end">
              <li className="breadcrumb-item">
                <Link to="/pendaftaran" className="link-headd">
                  Pendaftaran
                </Link>
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
                    name="namaLengkap"
                    placeholder="Nama Lengkap"
                    className={`form-control ${
                      formErrors.namaLengkap ? "is-invalid" : formSubmitted ? "is-valid" : ""
                    }`}
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{formErrors.namaLengkap}</div>
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Perempuan">
                      Perempuan
                    </label>
                  </div>
                  <div className="text-danger">{formErrors.jenisKelamin}</div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <label htmlFor="namaOrangTua" className="form-label">
                    Nama Orang Tua :
                  </label>
                  <input
                    type="text"
                    name="namaOrangTua"
                    placeholder="Nama Orang Tua"
                    className="form-control"
                    value={formData.namaOrangTua}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{formErrors.namaOrangTua}</div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <label htmlFor="alamatRumah" className="form-label">
                    Alamat Rumah :
                  </label>
                  <textarea
                    name="alamatRumah"
                    placeholder="Alamat Rumah"
                    className="form-control"
                    value={formData.alamatRumah}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{formErrors.alamatRumah}</div>
                </div>
                <div className="col-md-7">
                  <label htmlFor="usia" className="form-label">
                    Usia
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="number"
                      name="usia"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Usia"
                      className="form-control"
                      value={formData.usia}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="valid-feedback">Selesai</div>
                    <div className="invalid-feedback">
                      Harap masukkan Usia yang valid.
                    </div>
                    <div className="text-danger">{formErrors.usia}</div>
                  </div>
                </div>
                <div className="col-md-7">
                  <label htmlFor="kelas" className="form-label">
                    Kelas
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="number"
                      name="kelas"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Kelas"
                      className="form-control"
                      value={formData.kelas}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="valid-feedback">Selesai</div>
                    <div className="invalid-feedback">
                      Harap masukkan Kelas yang valid.
                    </div>
                    <div className="text-danger">{formErrors.kelas}</div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <label htmlFor="programBimbelKelas" className="form-label">
                    Program Kelas Bimbel
                  </label>
                  <select
                    name="programBimbelKelas"
                    className={`form-control ${
                      formErrors.programBimbelKelas ? "is-invalid" : formSubmitted ? "is-valid" : ""
                    }`}
                    value={formData.programBimbelKelas}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Pilih...
                    </option>
                    <option value="Pra-SD">Pra-SD</option>
                    <option value="SD">SD</option>
                    <option value="Privat">Privat</option>
                  </select>
                  <div className="text-danger">{formErrors.programBimbelKelas}</div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <label htmlFor="handphone" className="form-label">
                    No. Handphone :
                  </label>
                  <input
                    type="number"
                    name="handphone"
                    placeholder="Handphone"
                    className="form-control"
                    value={formData.handphone}
                    onChange={handleInputChange}
                  />
                  <div className="text-danger">{formErrors.handphone}</div>
                </div>
                <hr className="mt-5" />
                <button className="button-submit mb-5" type="submit">
                  KIRIM
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CreatePendaftaran;
