import Heroo from '../image/hero-img.png';
import Laptop from '../image/laptop.jpg'
import Iphone from '../image/iphone-13.png'
import Canon from '../image/canon.jpg'
import Asus from '../image/asus-pc.jpg'
import Hp from '../image/hp.jpg'
import Macbook from '../image/macbook.jpg'

import "./LandingPage.css"

function LandingPage() {
    return(
        <>
            <main className="text-style">
                {/* HERO */}
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide p-4 backg-color"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container col-xxl-6">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                            <img
                                src={Heroo}
                                className="d-block mx-lg-auto img-fluid w-100"
                                alt="Bootstrap Themes"
                                loading="lazy"
                            />
                            </div>
                            <div className="col-lg-6">
                            <h1 className="display-6 fw-bold text-light lh-1 mb-3">
                                Better Solutions For Your Business
                            </h1>
                            <p className="lead text-light">
                                We are team of talented designers making websites with Bootstrap
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a
                                href="createAccount.html"
                                type="button"
                                className="text-light btn btn-info px-4 me-md-2"
                                >
                                Get Started
                                </a>
                                <a
                                href="https://www.youtube.com/@AlterraAcademy"
                                type="button"
                                className="btn px-4 me-md-2 text-light"
                                >
                                Watch Video
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* FEATURES */}
                <div className="container px-4 py-5" id="featured-3">
                    <h2 className="pb-2 text-center color fw-bold">FEATURES</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <h3 className="fs-2 text-body-emphasis">Pilihan Luas Produk</h3>
                        <p>
                        Kami menyediakan beragam produk elektronik, mulai dari smartphone,
                        laptop, tablet, hingga perangkat audio, video, dan perangkat rumah
                        pintar.
                        </p>
                    </div>
                    <div className="feature col">
                        <h3 className="fs-2 text-body-emphasis">Produk Berkualitas</h3>
                        <p>
                        Kami hanya menjual produk dari merek-merek terkemuka yang terkenal
                        akan kualitas dan performa mereka.
                        </p>
                    </div>
                    <div className="feature col">
                        <h3 className="fs-2 text-body-emphasis">Layanan Pelanggan</h3>
                        <p>
                        Tim layanan pelanggan kami siap membantu menjawab pertanyaan,
                        memberikan saran, dan menangani keluhan Anda dengan ramah dan
                        profesional.
                        </p>
                    </div>
                    </div>
                </div>

                {/* LIST PRODUCT */}
                <div className="album py-5 bg-body-tertiary" id="pricing">
                    <div className="container">
                    <h2 className="pb-2 text-center color fw-bold">PRICING</h2>
                    <div className="row row-cols-1 row-cols-sm-2 py-5 row-cols-md-3 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <img
                            src={Laptop}
                            width="100%"
                            height={215}
                            alt=""
                            />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                RAZER BLADE 14 RYZEN 9 6900HX RTX3080TI 16GB/1TBSSD W11 14.0QHD
                                165HZ -BLK
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 10.000.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img
                            src={Iphone}
                            width="100%"
                            height={240}
                            alt=""
                            />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                Apple iPhone 13 Mini 128GB Blue
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 14.500.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img
                            src={Canon}
                            className=""
                            width="99%"
                            height={240}
                            alt=""
                            />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                Canon EOS Rebel T7 DSLR Camera
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 5.500.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img
                            src={Asus}
                            width="100%"
                            height={247}
                            alt=""
                            />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                ASUS AiO All-in-One Desktop PC, 23.8 FHD
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 11.660.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={Hp} width="100%" height={224} alt="" />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                Xiaomi Redmi 12 Pro Rose avec Xiaomi Buds 3 Pro
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 4.300.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img
                            src={Macbook}
                            width="100%"
                            height={247}
                            alt=""
                            />
                            <div className="card-body p-lg-3 p-md-2">
                            <p className="card-text text-center">
                                MacBook Pro 16-inch Space Gray
                            </p>
                            <h4 className="card-text text-center fw-bold color">
                                Rp. 20.000.000
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    Buy Now
                                </button>
                                </div>
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
                        <h2 className="pb-2 text-center fw-bold color">FAQs</h2>
                        <p>
                            Beberapa pertanyaan umum yang sering diajukan tentang Tokoku
                            Electronics
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
                                Bagaimana cara saya menghubungi layanan pelanggan jika saya
                                memiliki pertanyaan tentang produk atau pemesanan saya?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                Anda dapat menghubungi layanan pelanggan kami melalui nomor
                                telepon yang tercantum di situs web kami atau melalui email.
                                Tim kami siap membantu Anda dengan pertanyaan atau masalah
                                yang Anda miliki.
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
                                Apakah produk yang dijual dilengkapi dengan garansi?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                Ya, sebagian besar produk yang kami jual dilengkapi dengan
                                garansi pabrik. Informasi lebih lanjut tentang periode garansi
                                dan syarat-syaratnya dapat ditemukan di deskripsi produk
                                masing-masing.
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
                                Apakah Tokoku Electronics mengikuti perkembangan teknologi
                                terbaru?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                Ya, kami selalu mengikuti perkembangan terbaru dalam industri
                                teknologi dan berusaha untuk menyediakan produk-produk
                                inovatif yang sesuai dengan tren terkini. Jika Anda memiliki
                                pertanyaan lain yang tidak tercantum di sini, jangan ragu
                                untuk menghubungi tim layanan pelanggan kami. Kami siap
                                membantu Anda dengan senang hati!
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* ABOUT */}
                    <section className="text-center container" id="about">
                    <div className="row p-5">
                        <div className="col-lg-8 col-md-11 mx-auto">
                        <h2 className="pb-2 text-center fw-bold color">ABOUT</h2>
                        <p className="lead text-body-secondary">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        </div>
                    </div>
                    </section>
                    {/* JOIN */}
                    <section className="bg-secondary bg-opacity-10">
                    <div className="container py-5">
                        <div className="col-lg-8 col-md-11 mx-auto text-center">
                        <h5 className="color fw-bold">Join Our Newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <form className="d-flex flex-lg-row">
                            <input
                            id="email"
                            type="text"
                            className="form-control mx-2 w-75"
                            placeholder="Email address"
                            required=""
                            />
                            <button className="btn btn-info text-light" type="submit">
                            Subscribe
                            </button>
                        </form>
                        </div>
                    </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default LandingPage