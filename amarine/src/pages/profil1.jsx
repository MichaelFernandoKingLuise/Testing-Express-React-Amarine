import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupLogout from "../components/PopupLogout";
import NavbarMobile from "../components/NavbarMobile";

function profil1() {
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
              <div className="link-profil-nav-satu profil-nav-active">
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
              <div className="link-profil-nav-tiga">
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
              <form
                action=""
                method="POST"
                onSubmit={(event) =>
                  script.tampilkanPopupBerhasilPerubahanProfil(event)
                }
              >
                <div className="main-content-profil-section-kedua-background-image"></div>
                <img src="assets/pak bahrul.png" alt="" />
                <input
                  type="file"
                  name="foto-profil"
                  id="foto-profil"
                  className="d-none"
                />
                <label htmlFor="foto-profil" class="custom-file-upload">
                  Ubah Foto Profil
                </label>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="nama-lengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama-lengkap"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Tolong masukkan Data Valid!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="nomor-telepon">Nomor Telepon</label>
                  <input
                    type="number"
                    name="nomor-telepon"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Tolong masukkan Data Valid!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Tolong masukkan Data Valid!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="jenis-kelamin">Jenis Kelamin</label>
                  <input
                    type="text"
                    name="jenis-kelamin"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Tolong masukkan Data Valid!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <label htmlFor="tempat-tanggal-lahir">Tanggal Lahir</label>
                  <input
                    type="text"
                    name="tempat-tanggal-lahir"
                    required
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Tolong masukkan Data Valid!")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>
                <input
                  type="submit"
                  value="Simpan Perubahan"
                  className="input-simpan-perubahan"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup Berhasil Simpan */}
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
            Perubahan profil berhasil di simpan
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Popup Logout*/}
      <PopupLogout />
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

export default profil1;
