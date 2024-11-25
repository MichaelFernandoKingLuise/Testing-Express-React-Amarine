import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function tentangkami2() {
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
              <div className="link-tentang-kami-nav-satu">
                Deskripsi Web <i className="fas fa-angle-right ms-auto"></i>
              </div>
            </a>
            <a href="tentangkami2">
              <div className="link-tentang-kami-nav-dua tentang-kami-nav-active">
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
              Pertanyaan Yang Sering Diajukan
            </div>
            <div className="main-content-tentang-kami-section-kedua-isi">
              <button
                className="extend-bar-satu"
                onClick={() => script.toggleContent("extend-bar-satu")}
              >
                <div className="main-content-tentang-kami-section-kedua-isi-wrapper-bar">
                  Bagaimana cara mendaftar akun?
                  <i className="fas fa-angle-down ms-auto"></i>
                </div>
              </button>
              <div className="isi-extend-bar-satu isi-extend">
                Untuk mendaftar akun, cukup klik tombol "Daftar" di halaman
                utama, isi data diri seperti nama, email, dan password, lalu
                klik "Kirim". Anda akan menerima email konfirmasi untuk
                menyelesaikan pendaftaran.
              </div>

              <button
                className="extend-bar-dua"
                onClick={() => script.toggleContent("extend-bar-dua")}
              >
                <div className="main-content-tentang-kami-section-kedua-isi-wrapper-bar">
                  Apakah Website Amarine gratis?
                  <i className="fas fa-angle-down ms-auto"></i>
                </div>
              </button>
              <div className="isi-extend-bar-dua isi-extend">
                Ya, Website Amarine dapat diakses secara gratis dengan fitur
                dasar. Untuk akses premium, Anda bisa memilih paket langganan
                yang tersedia (segera hadir).
              </div>

              <button
                className="extend-bar-tiga"
                onClick={() => script.toggleContent("extend-bar-tiga")}
              >
                <div className="main-content-tentang-kami-section-kedua-isi-wrapper-bar">
                  Apa saja fitur-fitur yang terdapat di Website Amarine?
                  <i className="fas fa-angle-down ms-auto"></i>
                </div>
              </button>
              <div className="isi-extend-bar-tiga isi-extend">
                Website Amarine menyediakan berbagai fitur seperti: Panduan,
                kelola penjualan, laporan, nelayan.
              </div>

              <button
                className="extend-bar-empat"
                onClick={() => script.toggleContent("extend-bar-empat")}
              >
                <div className="main-content-tentang-kami-section-kedua-isi-wrapper-bar">
                  Apakah data saya aman?
                  <i className="fas fa-angle-down ms-auto"></i>
                </div>
              </button>
              <div className="isi-extend-bar-empat isi-extend">
                Ya, data Anda aman. Website Amarine menggunakan enkripsi SSL
                untuk melindungi informasi pribadi Anda.
              </div>

              <button
                className="extend-bar-lima"
                onClick={() => script.toggleContent("extend-bar-lima")}
              >
                <div className="main-content-tentang-kami-section-kedua-isi-wrapper-bar">
                  Bagaimana cara menambahkan artikel favorit?
                  <i className="fas fa-angle-down ms-auto"></i>
                </div>
              </button>
              <div className="isi-extend-bar-lima isi-extend">
                Untuk menambahkan artikel favorit, cukup klik ikon hati di
                halaman artikel yang ingin Anda simpan. Artikel akan tersimpan
                di daftar favorit Anda.
              </div>
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

export default tentangkami2;
