import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function detailhasiltangkapan() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content container-fluid">
        <div
          className="wrapper-main-content"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="main-title">
            <p>Detail Hasil Tangkapan</p>
          </div>
          <div className="wrapper-detail-hasil-tangkapan">
            <div className="gambar-detail-hasil-tangkapan">
              Gambar
              <hr />
              <img src="assets/kepiting.jpg" alt="" />
            </div>
            <div className="informasi-detail-hasil-tangkapan">
              <p className="m-0">Informasi</p>
              <hr />
              <div className="jenis-detail">
                <p className="judul-informasi">Nama</p>
                <p className="isi-informasi">Kepiting Galah</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Jenis</p>
                <p className="isi-informasi">Kepiting</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Berat</p>
                <p className="isi-informasi">10 Kg</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Tanggal</p>
                <p className="isi-informasi">17 Oktober 2024</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Waktu</p>
                <p className="isi-informasi">16.00</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Lokasi Penyimpanan</p>
                <p className="isi-informasi">Box 1</p>
              </div>
              <div className="jenis-detail">
                <p className="judul-informasi">Catatan</p>
                <p className="isi-catatan">
                  Kepiting ini di tangkap di daerah laut sekitar Batu Merah.
                </p>
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
      <div className="wrapper-navbar-bottom d-none">
        <a href="laporan">
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img
            src="assets/catatan nelayan icon active.svg"
            alt="Catatan Nelayan"
          />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default detailhasiltangkapan;
