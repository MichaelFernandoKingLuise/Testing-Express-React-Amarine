import React from "react";

import HeaderLogin from "../components/HeaderLogin";
import FooterLogin from "../components/FooterLogin";

function lupakatasandi1() {
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
            <header>Lupa Kata Sandi</header>
            <p>Silahkan masukkan email anda untuk mengatur ulang kata sandi</p>
            <form action="lupakatasandi2">
              <input
                type="email"
                name=""
                id=""
                placeholder="Masukkan email"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Tolong masukkan Email!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
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

export default lupakatasandi1;
