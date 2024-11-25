import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function laporan() {
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
            <p>Laporan Hasil Nelayan</p>
          </div>
          <div className="wrapper-tabel-laporan">
            <div className="header-wrapper-tabel-laporan">
          <div className="total-kuantitas">
            Total Kuantitas
          </div>
          <div className="jumlah-kuantitas">
            429 Kg
          </div>
          <div className="date-title ms-auto">
              <button type="button" href="laporan">
                <p>
                  14 Oktober 2024
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        stroke="black"
                        stroke-width="1.5"
                        d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
                      />
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M7 4V2.5M17 4V2.5M2.5 9h19"
                      />
                      <path
                        fill="black"
                        d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      />
                    </g>
                  </svg>
                </p>
              </button>
            </div>
            </div>
            <table className="tabel-laporan">
              <thead>
                <tr>
                  <td>Nelayan</td>
                  <td>Jumlah Kuantitas</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/pak bahrul.png" alt="" />
                      <span>Pak Bahrul</span>
                    </div>
                  </td>
                  <td>50 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Bambang</span>
                    </div>
                  </td>
                  <td>44 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
                <tr>
                  <td>
                    <div className="content-tabel-laporan-nelayan">
                      <img src="assets/gambar profil.jpg" alt="" />
                      <span>Pak Iwan</span>
                    </div>
                  </td>
                  <td>38 Kg</td>
                  <td><a href="laporandetail">Detail</a></td>
                </tr>
              </tbody>
            </table>
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
          <img src="assets/laporan icon active.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
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

export default laporan;
