import React from "react";

import * as script from "../script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopupLogout from "../components/PopupLogout";
import NavbarMobile from "../components/NavbarMobile";

function profil2() {
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
              <div className="link-profil-nav-dua profil-nav-active">
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
              <h2>Ubah Kata Sandi</h2>
              <h6>
                Untuk menjaga keamanan akun Anda, silakan masukkan kata sandi
                saat ini dan buat kata sandi baru yang kuat.{" "}
              </h6>
              <form
                action=""
                method="POST"
                onSubmit={(event) =>
                  script.tampilkanPopupBerhasilPerubahanKataSandi(event)
                }
              >
                <div className="form-wrapper-profil-section-kedua">
                  <div className="password-input wrapper-password-input-konfirmasi">
                    <label htmlFor="nama-lengkap">Kata Sandi Lama</label>
                    <input
                      type="password"
                      name=""
                      id="password1"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Kata sandi harus terdiri dari setidaknya 8 karakter. Gunakan kombinasi huruf, angka, dan karakter khusus"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <img
                      src="assets/open-eye.svg"
                      alt=""
                      id="open-eye-password1"
                      className="open-eye d-none"
                      onClick={() => script.togglePassword("password1")}
                    />
                    <img
                      src="assets/close-eye.svg"
                      alt=""
                      id="close-eye-password1"
                      className="close-eye"
                      onClick={() => script.togglePassword("password1")}
                    />
                  </div>
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <div className="password-input wrapper-password-input-konfirmasi">
                    <label htmlFor="nama-lengkap">Kata Sandi Baru</label>
                    <input
                      type="password"
                      name=""
                      id="password2"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Kata sandi harus terdiri dari setidaknya 8 karakter. Gunakan kombinasi huruf, angka, dan karakter khusus"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <img
                      src="assets/open-eye.svg"
                      alt=""
                      id="open-eye-password2"
                      className="open-eye d-none"
                      onClick={() => script.togglePassword("password2")}
                    />
                    <img
                      src="assets/close-eye.svg"
                      alt=""
                      id="close-eye-password2"
                      className="close-eye"
                      onClick={() => script.togglePassword("password2")}
                    />
                  </div>
                </div>
                <div className="form-wrapper-profil-section-kedua">
                  <div className="password-input wrapper-password-input-konfirmasi">
                    <label htmlFor="nama-lengkap">
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      name=""
                      id="password3"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Kata sandi harus terdiri dari setidaknya 8 karakter. Gunakan kombinasi huruf, angka, dan karakter khusus"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                    <img
                      src="assets/open-eye.svg"
                      alt=""
                      id="open-eye-password3"
                      className="open-eye d-none"
                      onClick={() => script.togglePassword("password3")}
                    />
                    <img
                      src="assets/close-eye.svg"
                      alt=""
                      id="close-eye-password3"
                      className="close-eye"
                      onClick={() => script.togglePassword("password3")}
                    />
                  </div>
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
            Ubah kata sandi berhasil di simpan
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

export default profil2;
