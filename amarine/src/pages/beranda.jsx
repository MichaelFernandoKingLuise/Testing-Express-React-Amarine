import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function beranda() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="main-search">
          <input
            type="text"
            placeholder="Apa yang ingin kamu cari?"
            style={{ marginTop: "30px" }}
          />
        </div>
        <div className="wrapper-main-content-beranda-primary">
          <div className="main-content-text-beranda">
            <h2>
              Tingkatkan kesejahteraan nelayan dengan sistem pengelolaan stok
              yang efisien, transparan, dan terintegrasi!
            </h2>
            <h3>
              Selamat datang di platform pengelolaan stok perikanan! Kami
              menghubungkan nelayan lokal dengan kemudahan dalam mengelola
              laporan, data stok, riwayat penangkapan, serta bergabung dalam
              komunitas nelayan. Dapatkan akses ke panduan informatif, fitur
              pelacakan stok yang akurat, dan dukungan untuk pengelolaan
              perikanan berkelanjutan.
            </h3>
          </div>
          <div className="main-content-image-beranda">
            <img src="assets/logo.png" alt="" />
          </div>
        </div>
        <div className="wrapper-main-content-panduan-dan-artikel-secondary">
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-header">
            Panduan
          </div>
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-content">
            <div
              className="wrapper-main-content-panduan-dan-artikel-secondary-content-card"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                href="panduan1"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 1.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Rantai Distribusi Perikanan</h2>
                  <h3>
                    Hubungan Nelayan, Pengepul Ikan, Pedagang Ikan melalui Teori
                    Struktural
                  </h3>
                  <a href="panduan2">Baca Selengkapnya</a>
                </div>
              </div>
              <div
                href="beranda"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 2.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Tradisi & Modernisasi Nelayan</h2>
                  <h3>
                    Muro, Tradisi Merawat Ekosistem Laut yang Berkelanjutan di
                    Lembata
                  </h3>
                  <a href="beranda">Baca Selengkapnya</a>
                </div>
              </div>
              <div
                href="beranda"
                className="card-main-content-panduan-dan-artikel-secondary"
              >
                <img src="assets/artikel 3.png" alt="panduan" />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <h2>Inovasi Untuk Nelayan</h2>
                  <h3>
                    Tanpa BBM, Kapal Nelayan Inovasi Mahasiswa ITS Ramah
                    Lingkungan
                  </h3>
                  <a href="beranda">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content End */}

      {/* Popup Welcome */}
      <div className="popup-welcome">
        <div
          className="popup-welcome-content"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="850"
          data-aos-once="true"
        >
          <h1>Selamat Datang di Amarine!</h1>
          <h3>
            Kelola hasil tangkapanmu dengan mudah dan efisien! Pantau, catat,
            dan optimalkan hasil tangkapan hanya dengan beberapa langkah
            sederhana.
          </h3>
          <button type="button" onClick={script.tutupPopupWelcome}>
            <img src="assets/close.svg" alt="Tutup" />
          </button>
        </div>
      </div>
      {/* Popup Welcome End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default beranda;
