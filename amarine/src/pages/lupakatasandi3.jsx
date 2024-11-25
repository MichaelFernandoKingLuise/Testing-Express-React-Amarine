import React from "react";

import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function lupakatasandi3() {
  return (
    <div>
      {/* Header */}
      <HeaderLogin />
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="wrapper-main-content-login wrapper-main-content-lupa-kata-sandi wrapper-main-content-lupa-kata-sandi3">
          <section className="section-gambar-login">
            <img src="assets/image-lupa-1.png" alt="" />
          </section>
          <section className="section-login">
            <header>Cek Email Anda</header>
            <p>
              Kata sandi anda berhasil diatur ulang. Klik konfirmasi untuk
              membuat kata sandi baru
            </p>
            <a href="lupakatasandi4" className="konfirmasi-lupa-kata-sandi">
              <button>Konfirmasi</button>
            </a>
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

export default lupakatasandi3;
