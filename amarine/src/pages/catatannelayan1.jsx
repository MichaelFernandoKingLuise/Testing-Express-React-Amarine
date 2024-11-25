import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function catatannelayan1() {
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
            <p>Catatan Hasil Tangkapan Nelayan</p>
          </div>
          <div className="wrapper-catatan-hasil">
            <a href="detailhasiltangkapan">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/kepiting.jpg" alt="Gambar" />
                  <div className="jumlah-berat">10 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Ahmad</div>
                <div className="nama-tangkapan">Kepiting</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/kepiting2.jpg" alt="Gambar" />
                  <div className="jumlah-berat">11 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Bambang</div>
                <div className="nama-tangkapan">Kepiting</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan kerapu.jpg" alt="Gambar" />
                  <div className="jumlah-berat">45 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Buyung</div>
                <div className="nama-tangkapan">Ikan Kerapu</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/udang.jpg" alt="Gambar" />
                  <div className="jumlah-berat">7 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Diki</div>
                <div className="nama-tangkapan">Udang</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/lele.jpg" alt="Gambar" />
                  <div className="jumlah-berat">5 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Slamet</div>
                <div className="nama-tangkapan">Ikan Lele</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan dori.jpg" alt="Gambar" />
                  <div className="jumlah-berat">2 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Yugi</div>
                <div className="nama-tangkapan">Ikan Dori</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan kembung.jpg" alt="Gambar" />
                  <div className="jumlah-berat">22 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Taufik</div>
                <div className="nama-tangkapan">Ikan Kembung</div>
              </div>
            </a>
            <a href="catatannelayan1">
              <div className="card-catatan-hasil-tangkapan-nelayan">
                <div className="container-image-catatan">
                  <img src="assets/ikan nila.jpg" alt="Gambar" />
                  <div className="jumlah-berat">8 Kg</div>
                </div>
                <div className="nama-nelayan">Pak Yono</div>
                <div className="nama-tangkapan">Ikan Nila</div>
              </div>
            </a>
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

export default catatannelayan1;
