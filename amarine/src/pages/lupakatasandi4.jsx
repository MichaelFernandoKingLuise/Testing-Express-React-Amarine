import React from "react";

import * as script from "../script";
import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function lupakatasandi4() {
  return (
    <div>
      {/* Header */}
      <HeaderLogin />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="wrapper-main-content-login wrapper-main-content-lupa-kata-sandi">
          <section className="section-gambar-login">
            <img src="assets/image-lupa-2.png" alt="" />
          </section>
          <section className="section-login">
            <header>Kata Sandi Baru</header>
            <p>
              Buat kata sandi baru. Pastikan kata sandi tersebut berbeda dengan
              kata sandi sebelumnya untuk keamanan
            </p>
            <form
              action=""
              onSubmit={(event) => script.tampilkanPopupBerhasilLogin(event)}
            >
              <div className="password-input">
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Kata Sandi"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Tolong masukkan Kata Sandi!")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
                <img
                  src="assets/open-eye.svg"
                  alt=""
                  id="open-eye-password"
                  className="open-eye d-none"
                  onClick={() => script.togglePassword("password")}
                />
                <img
                  src="assets/close-eye.svg"
                  alt=""
                  id="close-eye-password"
                  className="close-eye"
                  onClick={() => script.togglePassword("password")}
                />
              </div>
              <div className="password-input">
                <input
                  type="password"
                  name=""
                  id="password2"
                  placeholder="Konfirmasi Kata Sandi"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Tolong masukkan Kata Sandi!")
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
              <input type="submit" value="Konfirmasi" />
            </form>
          </section>
        </div>
      </div>
      {/* Main Content End */}

      {/* Popup */}
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
          <p className="popup-message popup-message-child popup-message-berhasil-daftar">
            Reset kata sandi berhasil kamu akan diarahkan ke layar masuk
            sekarang
          </p>
        </div>
      </div>
      {/* Popup End */}

      {/* Footer */}
      <FooterLogin />
      {/* Footer End */}
    </div>
  );
}

export default lupakatasandi4;
