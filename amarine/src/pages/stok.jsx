import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function stok() {
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
            <p>Detail Stok</p>
          </div>
          <div className="wrapper-tabel-stok">
            <div className="header-wrapper-tabel-stok">
              <div className="total-terjual">Terjual</div>
              <div className="jumlah-terjual">50 Kg</div>
              <div className="total-tersedia">Tersedia</div>
              <div className="jumlah-tersedia">50 Kg</div>
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
            <table className="tabel-stok">
              <thead>
                <tr>
                  <td>Nama</td>
                  <td>Jenis Ikan</td>
                  <td>Terjual</td>
                  <td>Tersedia</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ikan Nila</td>
                  <td>Ikan</td>
                  <td>6 Kg</td>
                  <td>6 Kg</td>
                </tr>
                <tr>
                  <td>Ikan Kerapu</td>
                  <td>Ikan</td>
                  <td>4 Kg</td>
                  <td>4 Kg</td>
                </tr>
                <tr>
                  <td>Ikan Bawal</td>
                  <td>Ikan</td>
                  <td>5 Kg</td>
                  <td>5 Kg</td>
                </tr>
                <tr>
                  <td>Ikan Tongkol</td>
                  <td>Ikan</td>
                  <td>4 Kg</td>
                  <td>4 Kg</td>
                </tr>
                <tr>
                  <td>Sotong</td>
                  <td>Gurita</td>
                  <td>7 Kg</td>
                  <td>7 Kg</td>
                </tr>
                <tr>
                  <td>Kepiting</td>
                  <td>Kepiting</td>
                  <td>5 Kg</td>
                  <td>5 Kg</td>
                </tr>
                <tr>
                  <td>Gurita</td>
                  <td>Gurita</td>
                  <td>8 Kg</td>
                  <td>8 Kg</td>
                </tr>
                <tr>
                  <td>Udang</td>
                  <td>Udang</td>
                  <td>5 Kg</td>
                  <td>5 Kg</td>
                </tr>
                <tr>
                  <td>Cumi</td>
                  <td>Cumi-cumi</td>
                  <td>6 Kg</td>
                  <td>6 Kg</td>
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
          <img src="assets/laporan icon.svg" alt="Laporan" />
        </a>
        <a href="catatannelayan1">
          <img src="assets/catatan nelayan icon.svg" alt="Catatan Nelayan" />
        </a>
        <a href="catatanpengepul1">
          <img src="assets/catatan pengepul icon.svg" alt="Catatan Pengepul" />
        </a>
        <a href="stok">
          <img src="assets/stok icon active.svg" alt="Stok" />
        </a>
      </div>
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default stok;
