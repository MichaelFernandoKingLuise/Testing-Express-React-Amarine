import React from "react";

import * as script from "../script";
import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function lupakatasandi2() {
  return (
    <div>
      {/* Header */}
      <HeaderLogin />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="wrapper-main-content-login wrapper-main-content-lupa-kata-sandi">
          <section className="section-gambar-login">
            <img src="assets/image-lupa-1.png" alt="" />
          </section>
          <section className="section-login">
            <header>Cek Email Anda</header>
            <p>Masukkan 5 digit kode OTP</p>
            <form action="lupakatasandi3">
              <div className="input-otp">
                <input
                  type="number"
                  id="otp1"
                  maxlength="1"
                  onInput={(e) => script.moveToNext(e.target, "otp2")}
                  required
                  autofocus
                  min="0"
                  max="9"
                />
                <input
                  type="number"
                  id="otp2"
                  maxlength="1"
                  onInput={(e) => script.moveToNext(e.target, "otp3")}
                  required
                  min="0"
                  max="9"
                />
                <input
                  type="number"
                  id="otp3"
                  maxlength="1"
                  onInput={(e) => script.moveToNext(e.target, "otp4")}
                  required
                  min="0"
                  max="9"
                />
                <input
                  type="number"
                  id="otp4"
                  maxlength="1"
                  onInput={(e) => script.moveToNext(e.target, "otp5")}
                  required
                  min="0"
                  max="9"
                />
                <input
                  type="number"
                  id="otp5"
                  maxlength="1"
                  required
                  min="0"
                  max="9"
                />
              </div>
              <input type="submit" value="Atur Ulang Kata Sandi" />
            </form>
          </section>
        </div>
      </div>
      {/* Main Content End */}

      {/* Footer */}
      <FooterLogin />
      {/* Footer End */}
    </div>
  );
}

export default lupakatasandi2;
