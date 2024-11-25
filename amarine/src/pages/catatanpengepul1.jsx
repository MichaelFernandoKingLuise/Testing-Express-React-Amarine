import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function catatanpengepul1() {
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
          <div className="main-search">
            <input type="text" placeholder="Apa yang ingin kamu cari?" />
          </div>
          <div className="main-title">
            <p>Catatan Penjualan</p>
          </div>
          <div className="wrapper-catatan-hasil">
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan nila.jpg" alt="Gambar" />
                  <div className="jumlah-berat">10 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan Nila</div>
                <div className="nama-tangkapan">Tersedia</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan kerapu.jpg" alt="Gambar" />
                  <div className="jumlah-berat">22 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan Kerapu</div>
                <div className="nama-tangkapan">Tersedia</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan dori.jpg" alt="Gambar" />
                  <div className="jumlah-berat">4 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan Dori</div>
                <div className="nama-tangkapan">Habis</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/kepiting3.jpg" alt="Gambar" />
                  <div className="jumlah-berat">45 Kg</div>
                </div>
                <div className="nama-nelayan">Kepiting</div>
                <div className="nama-tangkapan">Tersedia</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/udang.jpg" alt="Gambar" />
                  <div className="jumlah-berat">7 Kg</div>
                </div>
                <div className="nama-nelayan">Udang</div>
                <div className="nama-tangkapan">Tersedia</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/lele.jpg" alt="Gambar" />
                  <div className="jumlah-berat">34 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan lele</div>
                <div className="nama-tangkapan">Tersedia</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan nila.jpg" alt="Gambar" />
                  <div className="jumlah-berat">82 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan Nila</div>
                <div className="nama-tangkapan">Habis</div>
              </div>
            </a>
            <a href="catatanpengepul1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan kembung.jpg" alt="Gambar" />
                  <div className="jumlah-berat">43 Kg</div>
                </div>
                <div className="nama-nelayan">Ikan Kembung</div>
                <div className="nama-tangkapan">Habis</div>
              </div>
            </a>
            <button type="button">
              <a href="tambahhasiltangkapan">
                <img src="assets/plus.svg" alt="" />
              </a>
            </button>
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
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img
            src="assets/catatan pengepul icon active.svg"
            alt="Catatan Pengepul"
          />
        </a>
        <a href="stok">
          <img src="assets/stok icon.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default catatanpengepul1;
