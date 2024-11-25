import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function profil3() {
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
          <div className="main-content-profil-section-satu">
            <div className="main-content-profil-section-satu-background-image"></div>
            <div class="profil-info-section-satu">
              <img class="m-0" src="assets/pak bahrul.png" alt="Gambar" />
              <h3 class="profil-name">Pak Bahrul</h3>
            </div>
            <a href="profil1">
              <div className="link-profil-nav-satu ">
                <img src="assets/edit icon.svg" alt="" />
                Edit Profil
              </div>
            </a>
            <a href="profil2">
              <div className="link-profil-nav-dua">
                <img src="assets/key person icon.svg" alt="" />
                Ubah Kata Sandi
              </div>
            </a>
            <a href="profil3">
              <div className="link-profil-nav-tiga profil-nav-active">
                <img src="assets/laporkan masalah icon.svg" alt="" />
                Laporkan Masalah
              </div>
            </a>
            <div
              className="link-profil-nav-empat"
              onClick={() => script.tampilkanPopup()}
            >
              <img src="assets/logout icon.svg" alt="" />
              Keluar
            </div>
          </div>
          <div className="main-content-tentang-kami-section-kedua">
            <div className="main-content-profil-section-kedua-isi">
              <h2>Laporkan Masalah</h2>
              <form
                action=""
                method="POST"
                className="form-laporkan-masalah"
                onSubmit={(event) =>
                  script.tampilkanPopupBerhasilLaporankanMasalah(event)
                }
              >
                <textarea
                  id=""
                  required
                  rows={5}
                  className="isi-laporkan-masalah"
                  placeholder="Apa yang bisa kami bantu?"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Tolong tuliskan Masalah Anda!")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                ></textarea>
                <button type="submit">
                  <img src="assets/submit icon.svg" alt="Submit" />
                </button>
              </form>
              <h6>Kami akan merespons Anda melalui Email</h6>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup Berhasil Laporkan */}
      <div id="popup-berhasil-simpan" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/accept.svg" alt="Berhasil" />
          </div>
          <p className="popup-message">Berhasil!</p>
          <p className="popup-message popup-message-child">
            Masalah berhasil dilaporkan, kami akan merespons anda melalui Email
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Popup Logout*/}
      <div id="popup-hapus" className="popup-hidden-hapus">
        <div className="popup-box">
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-mini-icon"></div>
          <div className="popup-icon">
            <img src="assets/logout icon 2.svg" alt="Trash Icon" />
          </div>
          <p className="popup-message">Anda yakin keluar dari akun?</p>
          <div className="popup-buttons">
            <button
              className="btn btn-confirm"
              onClick={() => script.keluarWebsite()}
            >
              Ya
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => script.sembunyikanPopup()}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
      {/* Popup End */}

      {/* Footer */}
      <Footer />
      {/* Footer End */}

      {/* Navbar Mobile */}
      <NavbarMobile />
      {/* Navbar Mobile End*/}
    </div>
  );
}

export default profil3;
