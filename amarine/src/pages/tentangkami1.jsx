import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function tentangkami1() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div
          className="wrapper-main-content-tentang-kami"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-content-tentang-kami-section-satu">
            <a href="tentangkami1">
              <div className="link-tentang-kami-nav-satu tentang-kami-nav-active">
                Deskripsi Web <i className="fas fa-angle-right ms-auto"></i>
              </div>
            </a>
            <a href="tentangkami2">
              <div className="link-tentang-kami-nav-dua">
                Pertanyaan Yang Sering Diajukan
                <i className="fas fa-angle-right ms-auto"></i>
              </div>
            </a>
            <a href="tentangkami3">
              <div className="link-tentang-kami-nav-tiga">
                Tim<i className="fas fa-angle-right ms-auto"></i>
              </div>
            </a>
          </div>
          <div className="main-content-tentang-kami-section-kedua">
            <div className="main-content-tentang-kami-section-kedua-judul">
              Deskripsi Web
            </div>
            <div className="main-content-tentang-kami-section-kedua-isi">
              <p className="main-title-tentang-kami">
                Selamat Datang di Amarine!
              </p>
              <p className="sub-title-tentang-kami">Deskripsi</p>
              <p className="isi-sub-title-tentang-kami">
                Amarine adalah aplikasi untuk membantu nelayan mengelola hasil
                tangkapan, melihat panduan terkait perikanan dan berinteraksi di
                komunitas.
              </p>
              <p className="sub-title-tentang-kami">Tujuan</p>
              <p className="isi-sub-title-tentang-kami">
                Aplikasi Amarine bertujuan untuk membantu nelayan mengelola
                hasil tangkapan melalui teknologi digital.
              </p>
              <p className="sub-title-tentang-kami">Kontak dan Dukungan</p>
              <p className="isi-sub-title-tentang-kami">
                Jika Anda memiliki pertanyaan atau butuh bantuan, jangan ragu
                hubungi kami di <span>Amarine@gmail.com</span> atau kunjungi halaman Laporkan
                Masalah.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default tentangkami1;
