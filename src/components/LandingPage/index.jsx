import Heroe from '../image/hero-epena.png'
import About from '../image/Gambar-About.png'
import Program1 from '../image/program-1.png'
import Program2 from '../image/program-2.png'
import Program3 from '../image/program3.png'
import { Link } from 'react-router-dom'

import "./LandingPage.css"

function LandingPage() {
    return(
        <>
            <main className="text-fredoka">
                {/* HERO */}
                <div className="px-4 py-5 my-5 text-center hero">
                <img src={Heroe} alt="" className="mb-3" />
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                    Bimbingan Belajar Tatap Muka Terbaik untuk Pra-SD dan SD
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="button button1 btn-lg px-4 gap-3">
                        <Link className="link-daftar" to="/dashboard">DAFTAR SEKARANG</Link>
                    </button>
                    <button type="button" className="buttonn button2 btn-lg px-4">
                    <Link className="link-daftar" to="/dashboard">PROGRAM KELAS</Link>
                    </button>
                    </div>
                </div>
                </div>


                <div className="container col-xxl-8 px-4 py-5">
                    <h1 className="fw-bold text-center">Tentang</h1>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                    <h2 className="fw-bold lh-1 mb-3 warna-1">
                        Selamat Datang di Pena Cemerlang
                    </h2>
                    <p>
                        Selamat datang di Pena Cemerlang, tempat di mana kami mendedikasikan diri untuk meningkatkan prestasi akademik siswa/i. Kami adalah mitra pendidikan yang siap membantu siswa/i mencapai hasil terbaik dalam pelajaran-pelajaran Anda. Dengan tim pengajar berkualitas tinggi dan metode pengajaran yang terbukti efektif, kami siap membimbing Anda melewati setiap tantangan akademik.
                    </p>
                    <p>
                        Program-program kami mencakup berbagai mata pelajaran dan persiapan ujian, dan kami selalu berusaha memberikan pengalaman belajar yang disesuaikan dengan kebutuhan Anda.
                    </p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src={About}
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width={700}
                        height={500}
                        loading="lazy"
                    />
                    </div>
                </div>
                </div>


                {/* PROGRAM KAMI */}
                <div className="album py-5 bg-body-tertiary" id="pricing">
                    <div className="container">
                    <h1 className="pb-2 text-center fw-bold">Program Kami</h1>
                    <div className="row row-cols-1 row-cols-sm-2 py-5 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                src={Program1}
                                width="100%"
                                height={215}
                                alt=""
                                />
                                <div className="card-body p-lg-3 p-md-2">
                                <h4 className="card-text fw-bold text-center warna-2">
                                    PROGRAM Pra-SD
                                </h4>
                                <p className="card-text">
                                    Program ini dibuat untuk siswa/i yang ingin mempersiapkan simulasi belajar dan menuju SD favorit.
                                </p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link className="link-program" to="/dashboard">
                                        Daftar Sekarang
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                src={Program2}
                                width="100%"
                                height={215}
                                alt=""
                                />
                                <div className="card-body p-lg-3 p-md-2">
                                <h4 className="card-text fw-bold text-center warna-2">
                                    PROGRAM SD
                                </h4>
                                <p className="card-text">
                                        Program ini dibuat untuk siswa/i SD yang ingin meningkatkan pembelajaran dasar, serta peningkatan keterampilan siswa.
                                </p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link className="link-program" to="/dashboard">
                                        Daftar Sekarang
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                src={Program3}
                                width="100%"
                                height={215}
                                alt=""
                                />
                                <div className="card-body p-lg-3 p-md-2">
                                    <h4 className="card-text fw-bold text-center warna-2">
                                        PROGRAM PRIVAT
                                    </h4>
                                    <p className="card-text">
                                        Program ini menyediakan pengajaran individu atau kelompok kecil yang disesuaikan dengan kebutuhan siswa/i.
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Link className="link-program" to="/dashboard">
                                            Daftar Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* FAQs */}
                    <section className="text-center container" id="faqs">
                    <div className="row py-lg-5 py-md-5">
                        <div className="col-lg-8 col-md-11 mx-auto">
                        <h1 className="pb-2 text-center fw-bold warna-2">FAQs</h1>
                        <p>
                            Beberapa pertanyaan umum yang sering diajukan tentang Pena Cemerlang
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                                >
                                 Apa itu Program Kelas Pra-SD di Pena Cemerlang?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Program Kelas Pra-SD di Pena Cemerlang dirancang khusus untuk anak-anak usia pra-sekolah. Tujuannya adalah mempersiapkan mereka untuk masuk ke tingkat SD dengan dasar yang kuat dalam membaca, menulis, dan matematika.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                >
                                    Berapa lama durasi Program Kelas Pra-SD?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Durasi program ini bervariasi, tetapi umumnya berlangsung selama 6 hingga 12 bulan, tergantung pada kebutuhan dan perkembangan anak Anda.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                >
                                    Apa yang membuat Program SD di Pena Cemerlang unik?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Program SD kami menawarkan pendekatan pembelajaran yang disesuaikan dengan kebutuhan setiap siswa. Kami fokus pada pemahaman konsep, bukan sekadar menghafal, dan menggunakan metode yang interaktif dan menyenangkan.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                >
                                    Apa manfaat dari mengambil kelas privat di Pena Cemerlang?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                Kelas privat di Pena Cemerlang memberikan perhatian yang lebih fokus dan disesuaikan dengan kebutuhan siswa. Ini membantu siswa dalam mengatasi kesulitan belajar atau meningkatkan pemahaman mereka dalam mata pelajaran tertentu.
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default LandingPage